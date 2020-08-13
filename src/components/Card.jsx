import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from 'react-moment';


export default function Card() {
    Moment.globalFormat = 'D MMM YYYY HH:mm:ss';

    const [transc, setTransc] = useState([]);
    // const [boolean, setBoolean] = useState(false);

    //Delete transaction function
    const deleteTransac = async (id) => {
        try {
            await fetch(`/transactions/${id}`, {
                method:"DELETE"
            });

            setTransc(transc.filter(transac => transac.id !== id));
        } catch (err) {
            console.error("Error adding transactions!", err)
        }
    }
    
    //Get data function
    async function getData() {
        // setBoolean(true);
        let req = await axios.get("/transactions");
        let data = req.data;
        setTransc(data);
    }
    useEffect(() => {
        // if (boolean === false) {
            getData();
            displayCards();
        // }
    }, [transc])
    
    function displayCards() {
        return transc.map((transc) => {
            return (
                <div key={transc.id} className="display-cards">
                    <section>{transc.type}</section>
                    <section>{transc.transac}$</section>
                    <section><Moment >{transc.created_at}</Moment></section>
                    <button className="btn-delete" onClick={() => deleteTransac(transc.id)}>Delete</button>
                </div>
            );
        });
    };


    return (
        <div className="cards-container">
            {displayCards()}
        </div>
    )
}