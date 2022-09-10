import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardFooter,
  MDBInput,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPass] = useState("");
  const [error, setError] = useState("");

  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    if (password !== confPassword) {
      setError("Passwords must match!");
    } else {
      await register(email, password)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => {
          setError(err.toString());
        });
    }
  };
  return (
    <MDBContainer className="d-flex align-items-center justify-content-center">
      <MDBCard style={{ width: "600px" }}>
        <MDBCardTitle className="mt-2 text-center">
          <strong
            style={{ fontWeight: "400", color: "#000", marginBottom: "10px" }}
          >
            Register
          </strong>
        </MDBCardTitle>
        {error && (
          <MDBTypography className="ms-4 me-4" note noteColor="danger">
            <strong>Error: </strong> {error}
          </MDBTypography>
        )}
        <MDBCardBody>
          <form onSubmit={handleSubmit}>
            <MDBInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="Enter Your Email"
              size="lg"
              required
            />
            <MDBInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Enter Your Password"
              size="lg"
              required
              className="mt-3"
            />
            <MDBInput
              value={confPassword}
              onChange={(e) => setConfPass(e.target.value)}
              type="password"
              label="Enter Your Password"
              size="lg"
              required
              className="mt-3"
            />
            <div className="d-flex align-items-center justify-content-end mt-2">
              <MDBBtn
                type="submit"
                outline
                rounded
                style={{ fontWeight: "600" }}
              >
                Register
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="d-flex align-items-center justify-content-center">
            <span className="m-1">Already A Member?</span>
            <Link to="/login">
              <span> Login</span>
            </Link>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
};
