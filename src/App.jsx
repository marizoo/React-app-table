import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";

const App = () => {
    const [contacts, setContacts] = useState(data);
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    // Handling new Input
    const handleAddFormChange = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    // Add new input to the data list
    const handleAddFormSubmit = (ev) => {
        ev.preventDefault();

        const newContact = {
            id: nanoid(),
            fullName: addFormData.fullName,
            address: addFormData.address,
            phoneNumber: addFormData.phoneNumber,
            email: addFormData.email,
        };

        const newContacts = [...contacts, newContact];

        setContacts(newContacts);
        setAddFormData({
            fullName: "",
            address: "",
            phoneNumber: "",
            email: "",
        });
    };

    return (
        <div className="app-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <tr key={contact.id}>
                            <td>{contact.fullName}</td>
                            <td>{contact.address}</td>
                            <td>{contact.phoneNumber}</td>
                            <td>{contact.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h2>Add a Contact</h2>
            <form onSubmit={handleAddFormSubmit}>
                <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Enter your name"
                    onChange={handleAddFormChange}
                    value={addFormData.fullName}
                />
                <input
                    type="text"
                    name="address"
                    required
                    placeholder="Enter address"
                    onChange={handleAddFormChange}
                    value={addFormData.address}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    required
                    placeholder="Enter phone number"
                    onChange={handleAddFormChange}
                    value={addFormData.phoneNumber}
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter email"
                    onChange={handleAddFormChange}
                    value={addFormData.email}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default App;
