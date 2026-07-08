import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const EditEmployee = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const updateEmployee = (e) => {
        e.preventDefault();

        const employee = {
            firstName,
            lastName,
            email
        };

        EmployeeService.updateEmployee(employee, id)
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
                        Update Employee
                    </h3>

                    <div className="card-body">
                        <form>

                            <div className="form-group mb-3">
                                <label>First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>

                            <div className="form-group mb-3">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <button
                                className="btn btn-success"
                                onClick={updateEmployee}
                            >
                                Update
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

export default EditEmployee;