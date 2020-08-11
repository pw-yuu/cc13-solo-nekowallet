import React, { useState, useEffect} from 'react';
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
            displayBalance()
    }, [transc]);

    function displayBalance() {
        let balance = 0;
        for (let ele of transc) {
            balance += Number(ele.transac);
        }

        return balance
    };

    return (
    <div>
        balance: {displayBalance()}$
    </div>
    )
}