import React from 'react'
import MyMedia from "./Media";

export default function Body(){
    return(
            <div className="body">

                <section className="aboutme">
                    <h1>About me</h1>
                    <hr className="horazontal-line"/>

                        <img className="my-image" src={require('../images/profile.jpg')}/>

                        <div className="hey">

                            <p>
                                Hey !
                            </p>
                            <p>

                                I am Yewbdar Girma.I was born in Ethiopia. I live in Austin Texas.
                                I have a bachelor’s degree in computer science,
                                after completion of my bachelor degree I worked at Ethiopian Commodity Exchange (ECX).
                            </p>
                            <p>
                                Easy to work with diverse teams to implement projects.And passionate to design and build
                                a
                                sophisticated web-based applications
                            </p>
                            <p>
                                Self starter to learn and adapt new
                                technologies and always strive to
                                solve business problems with
                                practical and reusable solutions.

                            </p>
                            <p>Experienced in building applications using ,
                                <b>Front-end :</b> HTML5, CSS3, JavaScript, jQuery,
                                AJAX, React js. ,Bootstrap, Handlebars.js,
                                JSON <b>Version-Control:</b> Github. <b>Backend:</b>
                                Node.js, Express js, NPM.
                                <b>Database:</b>MySQL, Mongodb.
                            </p>
                            <p>
                                English is my second language and if you hear broken English around you that is probably
                                me &#x1F600;
                            </p>
                        </div>
                </section>
                {/*<MyMedia/>*/}
        </div>
    )
}