import React, { useState } from 'react';

export default function AddForm () {

    const [type, setType] = useState(undefined);
    const [transac, setTransac] =useState();
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;

    const onSubmitForm = async (e) => {

        if (!transac || type === undefined) {
            alert("Please select type and amount of transaction.");
            return;
        };
        if (type !== "Income" || transac < 0) {
            alert("Earnings' type has to be Income");
            return;
        }
        try {
            const body = { type, transac, year, month };
            const response = await fetch("/transactions/add", {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(body)
            });
            setType(undefined);
            setTransac("");
        } catch (err) {
            console.error("Error adding transactions!", err)
        }
    }
    const onSubmitFormMinus = async (e) => {
        if (!transac || type === undefined) {
            alert("Please select type and amount of transaction.");
            return;
        };
        if (type === "Income" || transac < 0) {
            alert("Spendings type have to be other than Income");
            return;
        }
        try {
            const body = { type, transac: -transac, year, month };
            const response = await fetch("/transactions/add", {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(body)
            });
            setType(undefined);
            setTransac("");
        } catch (err) {
            console.error("Error adding transactions!", err)
        }
    }

    return (
        <div className="form-container">
            <select
                name="locations"
                id="select-type"
                value={type}
                onChange={(e) => setType(e.target.value)}

            >
                    <option value="">Select type</option>
                    <option value="Income">Income</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Shopping">Shopping</option>
                    <option value="Housing">Housing</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Food">Food</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Other">Other</option>
            </select>

            <input
                type="number"
                id="add-transac"
                name="add-transac"
                placeholder="Add transaction"
                value={transac}
                onChange={(e) => setTransac(e.target.value)}
                required
            />

            <button className="btn-add" onClick={ () => {
                document.getElementById("select-type").value = "" ;
                onSubmitForm();
            }}>Earning</button>
            <button className="btn-add" onClick={ () => {
                document.getElementById("select-type").value = "";
                onSubmitFormMinus()
            }}
            >Spending</button>
        </div>
    )
}