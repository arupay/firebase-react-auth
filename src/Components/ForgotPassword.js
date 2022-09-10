import React, { useState } from "react";
import { Link } from "react-router-dom";

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
import { useAuth } from "../context/AuthContext";

function ForgotPassword() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [email, setEmail] = useState("");
  const { forgotPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError();
    await forgotPassword(email)
      .then((res) => {
        console.log(res);
        setSuccess("Check inbox for further instructions");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <MDBContainer className="d-flex align-items-center justify-content-center">
      <MDBCard style={{ width: "600px" }}>
        <MDBCardTitle className="mt-2 text-center">
          <strong
            style={{ fontWeight: "400", color: "#000", marginBottom: "10px" }}
          >
            Recover Your Password
          </strong>
        </MDBCardTitle>
        {success && (
          <MDBTypography className="ms-4 me-4" note noteColor="success">
            <strong>Success:</strong> {success}
          </MDBTypography>
        )}
        {error && (
          <MDBTypography className="ms-4 me-4" note noteColor="danger">
            <strong>Error:</strong> {error}
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
            <div className="d-flex align-items-center justify-content-end mt-2">
              <MDBBtn
                type="submit"
                outline
                rounded
                style={{ fontWeight: "600" }}
              >
                Reset Password
              </MDBBtn>
            </div>
          </form>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="d-flex align-items-center justify-content-center">
            <span className="m-1">Already A Member?</span>
            <Link to="/">
              <span> Profile</span>
            </Link>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
}

export default ForgotPassword;
