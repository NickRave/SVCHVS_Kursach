import React from "react";
import "./Singup.css";

export default function Singup() {
    return (
        <section className="Singup">

            
                <div class="title">Welcome!</div>
                <div class="group">
                    <input type="text" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>User</label>
                </div>
                
                <div class="group">
                    <input type="password" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Password</label>
                </div>
                <button className="btnSubmit">Submit</button>
                
            
        </section>
    )
}