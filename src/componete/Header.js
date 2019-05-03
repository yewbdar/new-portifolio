import React from 'react'

export default function Header(){
    return(
        <div>
            <header>
                <div className="menu-container">
                    <section className="myname"><h4 className="name">Yewbdar&nbsp;&nbsp;Girma</h4></section>
                    <section className="menu">
                        <ul className="menu-list">
                            <li><a className="menu-link" href="index.html">About &nbsp;</a><span
                                className="link-separator">|&nbsp;</span></li>
                            <li><a className="menu-link" href="portfolio.html">Portfolio&nbsp; </a>
                                                        <span class="link-separator">|&nbsp;</span>
                            </li>
                            <li><a class="menu-link" href="contact.html">Contact &nbsp;</a></li>

                        </ul>
                    </section>

                </div>
            </header>
        </div>
    )
}





