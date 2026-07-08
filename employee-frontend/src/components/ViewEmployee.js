import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

const ViewEmployee = () => {

    const [employee, setEmployee] = useState({});

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        EmployeeService.getEmployeeById(id)
            .then((response) => {
                setEmployee(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3">

                    <h3 className="text-center mt-3">
                        View Employee Details
                    </h3>

                    <div className="card-body">

                        <div className="mb-3">
                            <strong>Employee ID :</strong> {employee.id}
                        </div>

                        <div className="mb-3">
                            <strong>First Name :</strong> {employee.firstName}
                        </div>

                        <div className="mb-3">
                            <strong>Last Name :</strong> {employee.lastName}
                        </div>

                        <div className="mb-3">
                            <strong>Email :</strong> {employee.email}
                        </div>

                        <button
                            className="btn btn-primary"
                            onClick={() => navigate("/employees")}
                        >
                            Back
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewEmployee;