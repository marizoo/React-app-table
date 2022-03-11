import React from "react";

const EditableRow = ({
    onHandleEditInputData,
    editFormData,
    onHandleCancelBtnClick,
}) => {
    return (
        <tr>
            <td>
                <input
                    className="editableRow-input"
                    type="text"
                    required
                    name="fullName"
                    value={editFormData.fullName}
                    onChange={onHandleEditInputData}
                />
            </td>
            <td>
                <input
                    className="editableRow-input"
                    type="text"
                    required
                    name="address"
                    value={editFormData.address}
                    onChange={onHandleEditInputData}
                />
            </td>
            <td>
                <input
                    className="editableRow-input"
                    type="text"
                    required
                    name="phoneNumber"
                    value={editFormData.phoneNumber}
                    onChange={onHandleEditInputData}
                />
            </td>
            <td>
                <input
                    className="editableRow-input"
                    type="text"
                    required
                    name="email"
                    value={editFormData.email}
                    onChange={onHandleEditInputData}
                />
            </td>
            <td className="td-buttons">
                <button type="submit">Save</button>
                <button type="button" onClick={onHandleCancelBtnClick}>
                    Cancel
                </button>
            </td>
        </tr>
    );
};

export default EditableRow;
