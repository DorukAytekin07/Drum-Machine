import React from "react";
export default class Drum extends React.Component{

    h1a = new Audio('./Heater-1.mp3')
    h2a = new Audio('./Heater-2.mp3')
    h3a = new Audio('./Heater-3.mp3')
    h4a = new Audio('./Heater-4_1.mp3')
    h6a = new Audio('./Heater-6.mp3')
    oha = new Audio('./Dsc_Oh.mp3')
    ch2a = new Audio('./Cev_H2.mp3')
    knha = new Audio('./Kick_n_Hat.mp3')
    rk1a = new Audio('./RP4_KICK_1.mp3')

    playh1(){
        this.h1a.play();
    }
    playh2(){
        this.h2a.play();
    }
    playh3(){
        this.h3a.play();
    }
    playh4(){
        this.h4a.play();
    }
    playh6(){
        this.h6a.play();
    }
    playoh(){
        this.oha.play();
    }
    playch2(){
        this.ch2a.play();
    }
    playknh(){
        this.knha.play();
    }
    playrk1(){
        this.rk1a.play();
    }

    render(){
        return(
            <section>
                <h1 className="title">Drum Machine</h1>
                <div className="drum-div">
                    <div>
                        <button onClick={this.playh1.bind(this)}>Q</button>
                        <button onClick={this.playh4.bind(this)}>A</button>
                        <button onClick={this.playch2.bind(this)}>Z</button>
                    </div>
                    <div>
                        <button onClick={this.playh2.bind(this)}>W</button>
                        <button onClick={this.playh6.bind(this)}>S</button>
                        <button onClick={this.playoh.bind(this)}>D</button>
                    </div>
                    <div>
                        <button onClick={this.playh3.bind(this)}>E</button>
                        <button onClick={this.playknh.bind(this)}>X</button>
                        <button onClick={this.playrk1.bind(this)}>C</button>
                    </div>
                    

                    
                </div>
            </section>
        )
    }   
}