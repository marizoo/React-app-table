import React, { useState } from "react";
import "./appStyle.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import data from "./mock-data.json";

const App = () => {
    const [contacts, setContacts] = useState(data);

    // Delete List
    const handleDelete = (clickedId) => {
        const newContacts = contacts.filter(
            (contact) => contact.id !== clickedId
        );
        setContacts(newContacts);
    };

    return (
        <div className="app">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => (
                        <ReadOnlyRow
                            key={contact.id}
                            contact={contact}
                            onHandleDelete={handleDelete}
                        />
                    ))}
                </tbody>
            </table>
            <h2 className="addForm-title">Add User</h2>
            <form className="addForm-form">
                <input
                    className="addForm-input"
                    type="text"
                    placeholder="Full name..."
                    required
                />
                <input
                    className="addForm-input"
                    type="text"
                    placeholder="Address..."
                    required
                />
                <input
                    className="addForm-input"
                    type="text"
                    placeholder="Phone Number..."
                    required
                />
                <input
                    className="addForm-input"
                    type="email"
                    placeholder="Email..."
                    required
                />
                <button className="addForm-btn" type="submit">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default App;
