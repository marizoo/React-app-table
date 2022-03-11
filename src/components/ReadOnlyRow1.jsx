import React from "react";

const ReadOnlyRow1 = ({ contact, onhandleEditClick, onHandleDeleteRow }) => {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>
            <td>
                <button
                    onClick={(ev) => onhandleEditClick(ev, contact)}
                    type="button"
                >
                    Edit
                </button>
                <button
                    type="button"
                    onClick={() => onHandleDeleteRow(contact.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow1;
