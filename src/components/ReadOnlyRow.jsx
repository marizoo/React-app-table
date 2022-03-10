import React from "react";

const ReadOnlyRow = ({ contact, onhandleEditClick }) => {
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
            </td>
        </tr>
    );
};

export default ReadOnlyRow;
