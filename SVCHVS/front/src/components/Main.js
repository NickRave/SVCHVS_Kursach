import React from "react";
import "./Main.css";

export default function Main() {
    return (
        <main className="Main">
            <section className="SectionInputs">
               <a>Leave a request</a>
                <div className="group">
                    <input type="text" required/>
                    <span className="highlight"></span>
                    <span className="bar"></span>
                    <label>Name package</label>
                </div>
                <div class="group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Size</label>
                </div>
                <div class="group">
                    <input type="text" required/>
                        <span class="highlight"></span>
                        <span class="bar"></span>
                        <label>Priority</label>
                </div>
                <div class="group">
                    <input type="text" required />
                    <span class="highlight"></span>
                    <span class="bar"></span>
                    <label>Safety</label>
                </div>
                <button className="btnFind">Submit</button>
            </section>
        </main>
        
        
    )
}