import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import { Avatar } from 'primereact/avatar'
import { Button } from 'primereact/button'

function App() {
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
  }
  return (
    <div className="p-m-4">
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
    </div>
  );
}

export default App;
