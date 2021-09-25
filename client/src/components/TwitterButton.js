import { Button } from 'primereact/button'
import { Component } from 'react';


class TwitterButton extends Component{

    constructor(props){
        super(props);
        this.state = {
          requestToken: null,
          profile: null
        };
        const queryParams = new URLSearchParams(window.location.search);
        
        const oauth_token = queryParams.get('oauth_token');
        const oauth_verifier = queryParams.get('oauth_verifier');
        if(oauth_token && oauth_verifier){
          console.log('query: ' + queryParams.toString())
          this.requestAccessToken(oauth_token, oauth_verifier);
        }
    }
    
    handleClick() {
        console.debug("Click on twitter button");
        fetch('/twitter/authenticate').then(res => res.json())
          .then((results) => {
            this.setState({
              requestToken: results.oauthRequestToken
            })
        
              // requestTokenSecret: results.oauthRequestTokenSecret,
              // oauth_callback_confirmed: results.oauth_callback_confirmed
            const authorizationUrl = `https://api.twitter.com/oauth/authenticate?oauth_token=${this.state.requestToken}`;
            console.log(this.state.requestToken)
            window.location.href = authorizationUrl;
            
          }, (error) => console.log(error));

        
    };

    requestAccessToken(oauth_token, oauth_verifier){
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ oauth_token: oauth_token, oauth_verifier: oauth_verifier})
      };
      fetch('/twitter/callback', requestOptions).then(res => res.json())
        .then((results) => {
          console.log(results)
          fetch('api/user').then((res) => res.json())
            .then((data) => {
              this.setState({profile: data.user}) ;
              console.log(data)
              console.log(this.state.profile)
            });
          // window.location.href = 'http://localhost:3000';
          // http://127.0.0.1:3000/
        });
      
    }

    render(){

        return (
            <div>
                <div className="p-d-flex p-jc-center p-ai-center">
                    <Button onClick={this.handleClick.bind(this)}>Connect to Twitter</Button>
                </div>
                <p>User: {!this.state.profile ? "Loading Profile...": this.state.profile}</p>
            </div>
        );
    }
};

export default TwitterButton;