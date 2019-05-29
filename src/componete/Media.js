import React from 'react'

export default function MyMedia() {

    return(

            <section className="media">
                <h3 className="l2">Connect with Me</h3>
                <hr className="horazontal-line"/>
                    <ul className="media-list l2">
                        <li>
                            <a className="media-link" href="https://www.linkedin.com/in/yewbdar-abera/" target="_blank"><img
                                className="img" src={require("../images/linkedin.png")}/> </a>
                        </li>
                        <li>
                            <a className="media-link" href="https://github.com/yewbdar" target="_blank"><img
                                className="img" src={require( "../images/github.png")}/></a>
                        </li>
                        <li>
                            <a className="media-link" href="https://www.codewars.com/users/Yewbdar" target="_blank"><img
                                className="img" src={require( "../images/codewars.png")}/> </a>
                        </li>

                    </ul>

            </section>


    )

}