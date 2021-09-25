import React from 'react';

import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'
import TwitterButton from './TwitterButton';

function Home(){

    const data = {
        name: "Flolight",
        image: "https://github.com/Flolight.png",
        bio: "Cloud enthusiast",
        links: [
          {
            name: "Twitter",
            url: "https://twitter.com/FlolightC",
            icon: "twitter"
          }
        ]
      };
      const [hello, setHello] = React.useState(null);
      const [profile, setProfile] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
          .then((res) => res.json())
          .then((data) => setHello(data.message));
      }, []);

    React.useEffect(()=>{
        fetch("/api/user")
            .then((res) => res.json())
            .then((data) => setProfile(data.user ))
    }, [])

    return (
        <div className="p-m-4">
            <p>An Open source alternative to manage your social media profiles from one place</p>
        <div className="p-d-flex p-jc-center p-ai-center">
          <Avatar
            image={data.image}
            size="xlarge"
            shape="circle"
            ></Avatar>
          <h1 className="p-m-2">{data.name}</h1>
          
        </div>
        <div className="p-d-flex p-jc-center p-ai-center">
          <p>{data.bio}</p>
        </div>
        <div className="p-d-flex p-jc-center p-ai-center">
          <Button>Change picture</Button>
        </div>
        <p>{!hello ? "Loading..." : hello}</p>
        <p>{!profile ? "Loading Profile...": profile}</p>
        <TwitterButton></TwitterButton>
      </div>
    );
}

export default Home;