import React, { Component } from "react";
import "./../index.css"

import ConvertKitForm from 'convertkit-react'


class Landing extends Component{

    
    render(){
        return (
            <div className="flex flex-col landing-img bg-cover bg-center flex-grow">
                <div className="p-my-6 p-text-center font-bold">
                    <div className="my-2 "> 
                        <h2 className="text-3xl text-b-black">Manage all your social media profiles from one place</h2>
                    </div>
                    <div className="h-96"></div>
                    <div className="m-4 container mx-auto flex justify-center">
                        <ConvertKitForm formId={2633804}
                            className="ck-form" 
                            buttonBackground="#F9C22E"
                            buttonColor="#171614"
                            hideName={true}
                            />
                    </div>
                    
                </div>
            </div>
        );
    }
};

export default Landing;