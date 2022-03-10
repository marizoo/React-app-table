import React from "react";

const ReadOnlyRow = ({ contact, onHandleDelete }) => {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>

            <td>
                <button>Edit</button>
                <button
                    type="button"
                    onClick={() => onHandleDelete(contact.id)}
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
