import React from "react";
import imgLogoReact from "../assets/imgs/logo512.png";

function About() {
    return (
        <div className="content">
             <h1 className="title">About the React Library</h1>
             <article className="box-about">
                <img className={"img-float"} src={imgLogoReact} width={"20%"} alt={"logo-react"}/>
                <aside className="content-txt-float">
                <p>
                    React (also known as <strong>React.js</strong> or <strong>ReactJS</strong>) is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies. React can be used as a base in the development of single-page, mobile, or server-rendered applications with frameworks like Next.js. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.
                </p>
                </aside>
                </article>
        </div>
        
    );
}


export default About;