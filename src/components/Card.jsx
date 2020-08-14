import React, { useState, useEffect } from "react";
import axios from "axios";
import Moment from 'react-moment';


export default function Card() {

    Moment.globalFormat = 'D MMM YYYY HH:mm:ss';

    const [transc, setTransc] = useState([]);
    const [dateTransac, setDateTransac] = useState([]);
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
            cardContainer()
        // }
    }, [transc]);

    // function displayCardsContainer() {
    //     return dateTransac.map((eachTransac) => {
    //         return (
    //             <div>

    //                 <div className="card-container">{eachTransac[0].year} {eachTransac[0].month}</div>
    //                 <div>{displayCards()}</div>

    //             </div>
    //         )
    //     })
    // }
    
    function displayCards() {
        return dateTransac.map((eachTransac) => {
            
            return (

                <div>

                    <div className="card-container">{eachTransac[0].year}.{eachTransac[0].month}</div>
    
                    {eachTransac.map((transc) => {
                        return (
                            <div key={transc.id} className="display-cards">
                            <section>{transc.type}</section>
                            <section>{transc.transac}$</section>
                            <section><Moment >{transc.created_at}</Moment></section>
                            <button className="btn-delete"
                                onClick={() => {
                                    // setBoolean(false)
                                    return deleteTransac(transc.id)}}>
                                Delete
                            </button>
                        </div>
                            
                        )
                    })}

                </div>
            )
            
        })
    };
    

    // function displayCards() {
    //     return transc
    //         .map((transc) => {
    //             return (
    //                 <div className="card-container">
    //                     <h3>{transc.year} {transc.month}</h3>
    //                     <div key={transc.id} className="display-cards">
    //                         <section>{transc.type}</section>
    //                         <section>{transc.transac}$</section>
    //                         <section><Moment >{transc.created_at}</Moment></section>
    //                         <button className="btn-delete"
    //                             onClick={() => {
    //                                 // setBoolean(false)
    //                                 return deleteTransac(transc.id)}}>
    //                             Delete
    //                         </button>
    //                     </div>
    //                 </div>
    //             );
    //         });
    // };

    function cardContainer() {
        const copyTranscOne = [...transc];
        const copyTransacTwo = [...transc];
        const result = [];
        
        for (let i = 0; i < copyTranscOne.length; i++) {
            const output = [];
            for (let j = 0; j < copyTransacTwo.length; j++) {
                if (copyTranscOne[i].month === copyTransacTwo[j].month && copyTranscOne[i].year === copyTransacTwo[j].year) {
                    output.push(copyTransacTwo[j]);
                };                
            };
            result.push(output);
            copyTranscOne.splice(copyTranscOne[i], 2)
        }
        setDateTransac(result);
    }
    
    return (
        <div className="cards-container" >
            {displayCards()}
        </div>
    )
}