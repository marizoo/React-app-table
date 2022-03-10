import React from "react";

const EditableRow = ({ onEditFormData, onHandleEditFormChange }) => {
    return (
        <tr>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter name..."
                    name="fullName"
                    value={onEditFormData.fullName}
                    onChange={onHandleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter address..."
                    name="address"
                    value={onEditFormData.address}
                    onChange={onHandleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="text"
                    required
                    placeholder="Enter phone number..."
                    name="phoneNumber"
                    value={onEditFormData.phoneNumber}
                    onChange={onHandleEditFormChange}
                />
            </td>
            <td>
                <input
                    type="email"
                    required
                    placeholder="Enter email..."
                    name="email"
                    value={onEditFormData.email}
                    onChange={onHandleEditFormChange}
                />
            </td>
            <td>
                <button type="submit">Save</button>
            </td>
        </tr>
    );
};

export default EditableRow;
