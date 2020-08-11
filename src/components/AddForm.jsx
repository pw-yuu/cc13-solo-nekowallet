import React, { useState } from 'react';

export default function AddForm () {

    const [type, setType] = useState("");
    const [transac, setTransac] =useState();

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { type, transac };
            const response = await fetch("http://localhost:3000/add", {
                method: "POST",
                headers: { "Content-type": "application/json"},
                body: JSON.stringify(body)
            })

            console.log(response);
        } catch (err) {
            console.error("Error adding transactions!", err)
        }
    }

    return (
        <form onSubmit={onSubmitForm}>
            <select
                name="locations"
                id="locations-state"
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                    <option value="select-type">Select type</option>
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
            />

            <button>Add</button>
            <div>{transac}</div>
            <div>{type}</div>
        </form>
    )
}