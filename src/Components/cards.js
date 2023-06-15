import React from "react";
import imgComponent4 from "../assets/imgs/img-component-4.png";
import imgComponent2 from "../assets/imgs/img-component-2.png";
import imgComponent1 from "../assets/imgs/img-component-1.png";

function Cards(){
    return (
        <div className="cards-section" align="center">
        
        {   /*
        === Component Card1 ===
            */
        }
            <div align="center" className="cards card bg-primary text-white border border-5 border-rounder">
        <img className="cards card-img-top" src={imgComponent1} width="50%" height="20%" />
    <div className="cards card-body">
        <h5 className="cards card-title">Card title</h5>
        <p className="cards card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-success p-3">Go somewhere</a>
    </div>
    </div>
        {   /*
        === Component Card2 ===
            */
        }

    <div className="cards card bg-primary text-white border border-5 border-rounder">
            <img className="card-img-top" src={imgComponent2} width="50%" height="20%" />
    <div className="cards card-body">
            <h5 className="cards card-title">Card title</h5>
            <p className="cards card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success p-3">Go somewhere</a>
    </div>
    </div>        

        {   /*
        === Component Card3 ===
            */
        }
        <div className="cards card bg-primary text-white border border-5 border-rounder">
            <img className="card-img-top" src={imgComponent4} width="50%" height="20%" />
        <div className="cards card-body">
            <h5 className="cards card-title">Card title</h5>
            <p className="cards card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-success p-3">Go somewhere</a>
        </div>
        </div>
</div>



);

}
export default Cards;