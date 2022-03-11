import React, { useState } from "react";
import "./App.css";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import ReadOnlyRow from "./components/ReadOnlyRow";
import EditableRow from "./components/EditableRow";

const App1 = () => {
    // 01. listing data from json
    const [contacts, setContacts] = useState(data);

    // 02. a Handling new Input data
    const [addFormData, setAddFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    // 04. a. state to grab data from Editable Row (similar to 02.a)
    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    // 03. a. editable or read only state
    const [editContactId, setEditContactId] = useState(null);

    // 02. b. Handling new Input
    const handleAddFormChange = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const newFormData = { ...addFormData };
        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    };

    // 04. b. Handling new Input from Editable Row (similar to 02.b)
    const handleEditFormChange = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);

        // now go to 03.b to add "formValues"
    };

    //02. c. Add new input to the data list
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

    // 05. a To handle Form submission for the Editable Row
    const handleEditFormSubmit = (ev) => {
        ev.preventDefault();

        const editedContact = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        };

        // copy the contact's array with spread operators, so we dont mutate the original state
        const newContacts = [...contacts];

        // get the index of each editable row
        const index = contacts.findIndex(
            (contact) => contact.id === editContactId
        );

        // Now we have the index, we can update the row in the given position
        newContacts[index] = editedContact;

        // hide the editable row
        setContacts(newContacts);
        setEditContactId(null);
    };

    // 03.b. for the edit button in ReadOnly.jsx
    const handleEditClick = (ev, contact) => {
        ev.preventDefault();
        setEditContactId(contact.id);

        // from 04. b (Here, we want to get the initial form value from "contact")
        // 04.c get initial form value from ReadOnly Row
        const formValues = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        };
        setEditFormData(formValues);
        // now add this to EditableRow so the value will show on the edit form
    };

    // 06 a. Cancel button
    const handleCancelClick = () => {
        setEditContactId(null);
    };
    // now add this to the editableRow

    // 07. Delete row
    const handleDeleteRow = (id) => {
        // one way to do it
        // const newContacts = contacts.filter((contact) => contact.id !== id);
        // setContacts(newContacts);

        // Another way to do it
        const newContacts = [...contacts];
        const index = contacts.findIndex((contact) => contact.id === id);
        newContacts.splice(index, 1);

        setContacts(newContacts);
    };

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
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
                            <>
                                {editContactId === contact.id ? (
                                    <EditableRow
                                        onEditFormData={editFormData}
                                        onHandleEditFormChange={
                                            handleEditFormChange
                                        }
                                        onHandleCancelClick={handleCancelClick}
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        key={contact.id}
                                        contact={contact}
                                        onhandleEditClick={handleEditClick}
                                        onHandleDeleteRow={handleDeleteRow}
                                    />
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </form>
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

export default App1;
