import React, { useState } from "react";
import "./appStyle.css";
import ReadOnlyRow from "./components/ReadOnlyRow";
import data from "./mock-data.json";
import { nanoid } from "nanoid";
import EditableRow from "./components/EditableRow";

const App = () => {
    // 01. a1/a1. get data from mock-data.json. put in a state and display it.
    const [contacts, setContacts] = useState(data);

    // 02. a1/a1. Delete List
    const handleDelete = (clickedId) => {
        const newContacts = contacts.filter(
            (contact) => contact.id !== clickedId
        );
        setContacts(newContacts);
    };

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

    // 04. a1/ax. Create state to show/hide editable row
    const [editContactId, setEditContactId] = useState(null);

    // 04. a2/ax. to swith the read only row to editable row when you click the "EDIT" Button row.
    const handleEditButtonClick = (ev, contact) => {
        ev.preventDefault();
        setEditContactId(contact.id);

        // get initial form value from contact
        const initialValue = {
            fullName: contact.fullName,
            address: contact.address,
            phoneNumber: contact.phoneNumber,
            email: contact.email,
        };
        // then put it inside the editableRow form input data
        setEditFormData(initialValue);
    };

    // 04. a3/ax. Get data from Editable row's input
    const [editFormData, setEditFormData] = useState({
        fullName: "",
        address: "",
        phoneNumber: "",
        email: "",
    });

    // 04. a4/ax. Handle Edit Input Change. data bind with state "04. a3."
    const handleEditInputData = (ev) => {
        ev.preventDefault();

        const fieldName = ev.target.getAttribute("name");
        const fieldValue = ev.target.value;

        const editedData = { ...editFormData };
        editedData[fieldName] = fieldValue;

        setEditFormData(editedData);
    };

    // 04. a5/ax. Handle Edit Form Submit
    const handleEditFormSubmit = (ev) => {
        ev.preventDefault();

        const newEditedData = {
            id: editContactId,
            fullName: editFormData.fullName,
            address: editFormData.address,
            phoneNumber: editFormData.phoneNumber,
            email: editFormData.email,
        };

        const newDatas = [...contacts];

        const index = contacts.findIndex(
            (contact) => contact.id === editContactId
        );

        newDatas[index] = newEditedData;

        setContacts(newDatas);
        setEditContactId(null);

        // 04. a6/ax. Show Initial form value inside the editable input.
        // put this inside the handleEditButtonClick (04.a2)
    };

    // 04. a7/ax. Handle Cancel BUtton click from editableRow.jsx
    const handleCancelBtnClick = () => {
        setEditContactId(null);
    };

    return (
        <div className="app">
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
                                        onHandleEditInputData={
                                            handleEditInputData
                                        }
                                        editFormData={editFormData}
                                        onHandleCancelBtnClick={
                                            handleCancelBtnClick
                                        }
                                    />
                                ) : (
                                    <ReadOnlyRow
                                        key={contact.id}
                                        contact={contact}
                                        onHandleDelete={handleDelete}
                                        onHandleEditButtonClick={
                                            handleEditButtonClick
                                        }
                                    />
                                )}
                            </>
                        ))}
                    </tbody>
                </table>
            </form>
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
