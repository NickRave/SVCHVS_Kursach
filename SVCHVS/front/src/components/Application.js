import React from "react";
import "./Application.css";

export default function Application() {
    return (
        <main className="Orders">
            <section className="Ticket">
                <div class="cardWrap">
                    <div class="card cardLeft">
                        <div class = "cardHeader">
                            <h1>Your <span>application</span></h1>
                        </div>
                        <div className="titlel">
                            <span>Name package</span>
                            <h2>Mobile phone </h2>
                        </div>
                        <div class="titlel1">
                            <span>Size</span>
                            <h2>23x23x23 <span>cm</span></h2>
                        </div>
                        <div class="name">
                            <span>Priority</span>
                            <h2>3</h2>
                        </div>
                        <div class="seat">
                            <span>Safety </span>
                            <h2>3</h2>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}