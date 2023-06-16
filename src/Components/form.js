import React from "react";

function Form(){
    return (
        <div id='contact'>
        <form method="post" action="">
        <div align="center">
            <h3 class="alert alert-success">For any questions or concerns, do not hesitate to contact us! You ask, we answer! </h3>
            <br />
        </div>
        <div id='input'>
            <label for="name">Name: </label><br />
            <input id="name" className="form-control" type="name" placeholder="Alexandru" autocomplete="of" required/>
            <br />
            <label for="email">Email: </label><br />
            <input id="email" className="form-control" type="email" placeholder="example@gmail.com" required/>
            <br />
        </div>
            <label for="messages">Messages: </label><br />
            <textarea id="messages" className="form-control" placeholder="Messages" required/>
            <br />
            <button className="btn-primary">Trimite</button>
        </form>
        </div>     
    );
}

export default Form;