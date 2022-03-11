import React from "react";

const ReadOnlyRow = ({ contact, onHandleDelete, onHandleEditButtonClick }) => {
    return (
        <tr>
            <td>{contact.fullName}</td>
            <td>{contact.address}</td>
            <td>{contact.phoneNumber}</td>
            <td>{contact.email}</td>

            <td className="td-buttons">
                <button
                    type="button"
                    onClick={(ev) => onHandleEditButtonClick(ev, contact)}
                >
                    Edit
                </button>
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
