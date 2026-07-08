import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const navigate = useNavigate();

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {
            firstName,
            lastName,
            email
        };

        EmployeeService.createEmployee(employee)
            .then(() => {
                navigate("/employees");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">

                    <h3 className="text-center mt-3">
                        Add Employee
                    </h3>

                    <div className="card-body">

                        <form>

                            <div className="form-group mb-3">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn btn-success"
                                onClick={saveEmployee}
                            >
                                Save
                            </button>

                            <button
                                className="btn btn-danger ms-2"
                                onClick={() => navigate("/employees")}
                            >
                                Cancel
                            </button>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddEmployee;