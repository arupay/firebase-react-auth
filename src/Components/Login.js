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

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    await login(email, password)
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setError(err.toString());
      });
  };
  return (
    <MDBContainer className="d-flex align-items-center justify-content-center">
      <MDBCard style={{ width: "600px" }}>
        <MDBCardTitle className="mt-2 text-center">
          <strong
            style={{ fontWeight: "400", color: "#000", marginBottom: "10px" }}
          >
            Login
          </strong>
        </MDBCardTitle>
        {error && (
          <MDBTypography className="ms-4 me-4" note noteColor="danger">
            <strong>Error: </strong> {error}
          </MDBTypography>
        )}
        <MDBCardBody>
          <form onSubmit={handleSubmit} noValidate>
            <MDBInput
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type={"email"}
              label="Enter Your Email"
              size="lg"
              required
            />
            <MDBInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Enter Your Password"
              autoComplete="off"
              size="lg"
              required
              className="mt-3"
            />
            <div className="d-flex align-items-center justify-content-end mt-2">
              <Link className="me-2" to={"/forget-password"}>
                Forgot My Password?
              </Link>
              <MDBBtn
                type="submit"
                outline
                rounded
                style={{ fontWeight: "600" }}
              >
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="d-flex align-items-center justify-content-center">
            <span className="m-1">New Here?</span>
            <Link to="/register">
              <span> Register</span>
            </Link>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
};
