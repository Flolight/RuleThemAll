import React, { Component } from "react";
import logo from "./../img/logo.png"

class Header extends Component{

    render(){
        return (
            <div>
                <header>
                    <nav className="container flex items-center justify-between py-2">
                        <div className="container flex items-center justify-start">
                            <div className="m-4">
                            <img src={logo} className="h-10"/>
                            </div>
                            <div className="m-2">
                            <h1 className="text-2xl">Rule Them All</h1>
                            </div>
                            
                        </div>
                        <div className="">
                            <button className="rounded-3xl w-40 h-12 bg-b-yellow">
                                Get started !
                            </button>
                        </div>
                        
                    </nav>   
                </header>
                
            </div>
        );
    }
};

export default Header