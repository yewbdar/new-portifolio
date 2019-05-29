import React from 'react'

export default function Header(){
    return(
        <div>
            <header>
                <div className="menu-container">
                    <section className="myname"><h4 className="name">Yewbdar&nbsp;&nbsp;Girma</h4></section>
                    <section className="menu">
                        {/*<ul className="menu-list">*/}
                            {/*<li><a className="menu-link" href="about">About </a></li>*/}

                            {/*<li><a className="menu-link" href="portfolio">Portfolio </a></li>*/}
                            {/*<li><a class="menu-link" href="contact">Contact</a></li>*/}

                        {/*</ul>*/}

                        <div className="topnav " id="myTopnav">
                            <a  className='active' href="about">About </a>
                            <a  href="portfolio">Portfolio </a>
                            <a  href="contact">Contact</a>
                </div>
                    </section>

                </div>
            </header>
        </div>
    )
}





