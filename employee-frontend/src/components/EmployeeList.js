import React, { useEffect, useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {

    const [employees, setEmployees] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllEmployees();
    }, []);

    const getAllEmployees = () => {
        EmployeeService.getEmployees()
            .then((response) => {
                setEmployees(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const deleteEmployee = (id) => {
        EmployeeService.deleteEmployee(id)
            .then(() => {
                getAllEmployees();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">

            <button
                className="btn btn-primary mb-3"
                onClick={() => navigate("/add-employee")}
            >
                Add Employee
            </button>

            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map((employee) => (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>

                                <td>

                                    <button
                                        className="btn btn-info"
                                        onClick={() => navigate(`/edit-employee/${employee.id}`)}
                                    >
                                        Update
                                    </button>

                                    <button
                                        className="btn btn-danger"
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => deleteEmployee(employee.id)}
                                    >
                                        Delete
                                    </button>

                                    <button
                                        className="btn btn-secondary"
                                        style={{ marginLeft: "10px" }}
                                        onClick={() => navigate(`/view-employee/${employee.id}`)}
                                    >
                                        View
                                    </button>

                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

        </div>
    );
};

export default EmployeeList;