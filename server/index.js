const express = require('express');
const oauth = require('oauth');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
const fs = require('fs');
const { promisify } = require('util');
const { mainModule } = require('process');
const { rejects } = require('assert');
const dotenv = require('dotenv');


dotenv.config();
const PORT = process.env.PORT || 5000;

console.log(process.env.TWITTER_CONSUMER_API_KEY)
const COOKIE_SECRET = process.env.npm_config_cookie_secret || process.env.COOKIE_SECRET;
const TWITTER_CONSUMER_API_KEY = process.env.npm_config_twitter_consumer_api_key || process.env.TWITTER_CONSUMER_API_KEY;
const TWITTER_CONSUMER_API_SECRET_KEY = process.env.npm_config_twitter_consumer_api_secret_key || process.env.TWITTER_CONSUMER_API_SECRET_KEY;

//const TEMPLATE = fs.readFileSync(path.resolve(__dirname, 'client', 'template.html'), { encoding: 'utf8' });

const oauthConsumer = new oauth.OAuth(
                                'https://twitter.com/oauth/request_token',
                                'https://twitter.com/oauth/access_token',
                                TWITTER_CONSUMER_API_KEY,
                                TWITTER_CONSUMER_API_SECRET_KEY,
                                '1.0A',
                                'http://localhost:3000',
                                'HMAC-SHA1'
                              );

main().catch(err => console.error(err.message, err));

async function main(){
  
  const app = express();
  app.use(cookieParser())
  app.use(session({ secret: COOKIE_SECRET || 'secret' }));
  app.use(express.json());

  app.get('/', async (req, res, next) => {
    console.log('/ req.cookies', req.cookies)
    if (req.cookies && req.cookies.twitter_screen_name) {
      console.log('/ authorized', req.cookies.twitter_screen_name)
      return res.send(`
        <h1>Hello ${req.cookies.twitter_screen_name}</h1>
        <br>
        <a href=“/twitter/logout”>logout</a>
      `)
    }
    return next();
  });

  app.get('/twitter/authenticate', twitter('authenticate'));
  app.get('/twitter/authorize', twitter('authorize'));
  function twitter(method = 'authorize'){
    return async (req, res) => {
      console.log(method);
      const {oauthRequestToken, oauthRequestTokenSecret, results} = await getOAuthRequestToken();
      console.log(`/twitter/${method} ->`, { oauthRequestToken, oauthRequestTokenSecret, results });

      // @TODO check that oauth_callback_confirmed: 'true'
      req.session = req.session || {};
      req.session.oauthRequestToken = oauthRequestToken
      req.session.oauthRequestTokenSecret = oauthRequestTokenSecret
      console.log(`/twitter/${method} :  ${JSON.stringify(req.session)}`)
      req.session.save();
      res.json({oauthRequestToken, oauthRequestTokenSecret, results});
      return;
      
      
      const authorizationUrl = `https://api.twitter.com/oauth/${method}?oauth_token=${oauthRequestToken}`;
      console.log('redirecting to ', authorizationUrl);

      res.redirect(authorizationUrl);
    };
  }

  async function getOAuthRequestToken(){
    return new Promise((resolve, reject) => {
      oauthConsumer.getOAuthRequestToken (function(error, oauthRequestToken, oauthRequestTokenSecret, results){
        console.log(error)
        return error
          ? reject(new Error('Error getting oAuth Request token'))
          : resolve({ oauthRequestToken, oauthRequestTokenSecret, results})
      });
    });
  }

  async function getOAuthAccessTokenWith({ oauthRequestToken, oauthRequestTokenSecret, oauthVerifier } = {}){
    return new Promise((resolve, reject) => {
      oauthConsumer.getOAuthAccessToken(oauthRequestToken,oauthRequestTokenSecret, oauthVerifier, function (error, oauthAccessToken, oauthAccessTokenSecret, results){
        console.log(`${oauthVerifier} | ${oauthRequestToken} | ${oauthRequestTokenSecret}`)
        
        console.log(error)
        return error
          ? reject(new Error('Error getting oAuth Access token'))
          : resolve({ oauthAccessToken, oauthAccessTokenSecret, results });
      });
    });
  }

  async function oauthGetUserById(userId, { oauthAccessToken, oauthAccessTokenSecret } = {}){
    return promisify(oauthConsumer.get.bind(oauthConsumer))(`https://api.twitter.com/1.1/users/show.json?user_id=${userId}`, oauthAccessToken, oauthAccessTokenSecret)
      .then(body => JSON.parse(body))
  }

  app.post('/twitter/callback', async (req, res) => {
    console.log('/twitter/callback : ' + JSON.stringify(req.session))
    const { oauthRequestToken, oauthRequestTokenSecret } = req.session;
    console.log('callback body: ' + JSON.stringify(req.body));
    const oauthVerifier = req.body.oauth_verifier;
    req.session.save();
    console.log('parameters callback : ', { oauthRequestToken, oauthRequestTokenSecret, oauthVerifier })

    const { oauthAccessToken, oauthAccessTokenSecret, results} = await getOAuthAccessTokenWith({ oauthRequestToken, oauthRequestTokenSecret, oauthVerifier });
    req.session.oauthAccessToken = oauthAccessToken
    console.log('access token ok : ' + req.session.oauthAccessToken,results)

    const { user_id: userId } = results
    const user = await oauthGetUserById(userId, { oauthAccessToken, oauthAccessTokenSecret })
    console.log(user)

    req.session.twitter_screen_name = user.screen_name;
    res.cookie('twitter_screen_name', user.screen_name, { maxAge: 900000, httpOnly: true });
    console.log('user succesfully logged in with twitter', user.screen_name)
    req.session.save()
    res.json({ user: user.screen_name });
  });

  app.get("/api", (req, res) => {
    res.json({ message: "Hello from API server!" });
  });

  app.get("/api/twitter/auth", (req, res) => {
    res.json({ message: "Let's try to authenticate using Twitter" });
  });
  app.get('/api/session', (req, res) => {
    res.json(req.session)
  });
  
  app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

