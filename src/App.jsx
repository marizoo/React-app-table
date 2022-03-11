import React, { useState } from "react";
import "./appStyle.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import data from "./mock-data.json";
import { nanoid } from "nanoid";

const App = () => {
    // 01. a1/a1. get data from mock-data.json. put in a state and display it.
    const [contacts, setContacts] = useState(data);

    // 03. a1/a3. State to get the "Add-User" data.
    const [addUserData, setAddUserData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    // 03. a2/a3. get data from the "Add-User" Form, data bind the state - to the form.
    const handleAddFormChange = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const newAddUser = { ...addUserData };
        newAddUser[fieldName] = fieldValue;
        setAddUserData(newAddUser);
    };

    // 03. a3/a3. handle "add-user" form submission -> add it to the "setContacts" list
    const handleAddFormSubmit = (ev) => {
        ev.preventDefault();

        const newUserData = {
            id: nanoid(),
            fullName: addUserData.fullName,
            address: addUserData.address,
            phoneNumber: addUserData.phoneNumber,
            email: addUserData.email,
        };

        const addUserDatas = [...contacts, newUserData];

        setContacts(addUserDatas);
        setAddUserData({
            fullName: "",
            address: "",
            phoneNumber: "",
            email: "",
        });
    };

    // 02. a1/a1. Delete List
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
            <form className="addForm-form" onSubmit={handleAddFormSubmit}>
                <input
                    className="addForm-input"
                    type="text"
                    name="fullName"
                    placeholder="Full name..."
                    required
                    value={addUserData.fullName}
                    onChange={handleAddFormChange}
                />
                <input
                    className="addForm-input"
                    type="text"
                    name="address"
                    placeholder="Address..."
                    required
                    value={addUserData.address}
                    onChange={handleAddFormChange}
                />
                <input
                    className="addForm-input"
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number..."
                    required
                    value={addUserData.phoneNumber}
                    onChange={handleAddFormChange}
                />
                <input
                    className="addForm-input"
                    type="email"
                    name="email"
                    placeholder="Email..."
                    required
                    value={addUserData.email}
                    onChange={handleAddFormChange}
                />
                <button className="addForm-btn" type="submit">
                    Add User
                </button>
            </form>
        </div>
    );
};

export default App;
