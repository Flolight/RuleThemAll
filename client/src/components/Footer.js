import React, { Component } from "react";

class Footer extends Component{

    render(){
        return (
            <div>
                <footer className="flex items-center justify-center pt-1 border-b-2 border-b-yellow">
                    <span className="mr-2">Contribute on </span>
                    <a href="https://github.com/Flolight/RuleThemAll" >
                        <i className="pi pi-github"></i>
                    </a>
                </footer>
            </div>
        );
    }
};

export default Footer