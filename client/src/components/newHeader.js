import '../css/headerpage.css'
import logo from '../images/aaswad-logo.svg'
import ReactAnime from 'react-animejs'
import React from 'react'
const { Anime, stagger } = ReactAnime

export default function newHeader() {
    return (
        <div>
            This is header
            <div className="header">
                <div style={{ "width": "70%" }}>
                    <Anime
                        initial={[
                            {
                                targets: "#logo",
                                translateX: [0, 50],
                                easing: "easeInOutSine",
                                opacity: [0, 1],
                                delay: 0
                            }
                        ]}
                    >
                        <img id="logo" src={logo} alt="Logo" />
                    </Anime>
                </div>
                <div>
                    <Anime
                        style={{ "display": "flex" }}
                        initial={[
                            {
                                targets: "#words",
                                translateY: [-200, 50],
                                easing: "easeInOutSine",
                                opacity: [0, 1],
                                delay: 500
                            }
                        ]}
                    >
                        <div id="words">Contact Us</div>
                        <div id="words">Order Now</div>
                    </Anime>
                </div>

                <Anime
                    initial={[
                        {
                            targets: "#logo2",
                            translateX: [10, 0],
                            easing: "easeInOutSine",
                            opacity: [0, 1],
                            delay: 1000
                        }
                    ]}
                >
                    <img id="logo2" src={logo} alt="Logo" />
                </Anime>
            </div>
            <div className="mid-content">
                <div >
                    <Anime
                        initial={[
                            {
                                targets: "#words2",
                                translateX: [-200, 0],
                                easing: "easeInOutSine",
                                opacity: [0, 1],
                                delay: 1500
                            }
                        ]}
                    >
                        <h1 id="words2">Home is where,</h1>
                    </Anime>
                    <Anime
                        initial={[
                            {
                                targets: "#words3",
                                translateX: [200, 0],
                                easing: "easeInOutSine",
                                opacity: [0, 1],
                                delay: 1500
                            }
                        ]}
                    >
                        <h1 id="words3">I'm with food</h1>
                    </Anime>
                </div>
                <div>
                    <Anime
                        initial={[
                            {
                                targets: "#logo3",
                                easing: "easeInOutSine",
                                translateY: [20, 0],
                                opacity: [0, 1],
                                delay: 2000,
                            }
                        ]}
                    >
                        <img id="logo3" src={logo} alt="Logo" />
                    </Anime>
                </div>
            </div>

        </div >
    )

}