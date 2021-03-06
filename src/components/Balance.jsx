import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Balance() {
    const [transc, setTransc] = useState([]);

    
    async function getData() {
        let req = await axios.get("/transactions");
        let data = req.data;
        setTransc(data);
    }
    
    useEffect(() => {
        getData();
        displayBalance();
    }, [transc]);
    
    function displayBalance() {
        let balance = 0;
        for (let ele of transc) {
            balance += Number(ele.transac);
        }

        // if(balance < 3000) {
        //     Notification.requestPermission();
        //     new Notification("Hi there!");
        // }

        return balance
    };

    return (
    <div className="balance">
        <div>
            Balance:   <span className="display-balance">{displayBalance()}$</span>
        </div>
    </div>
    )
}