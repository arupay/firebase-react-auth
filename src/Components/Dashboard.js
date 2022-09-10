import React from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { AuthContext, useAuth } from "../context/AuthContext";

export function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <MDBContainer className="d-flex align-items-center justify-content-center">
      <MDBCard style={{ width: "600px" }}>
        <MDBCardTitle className="mt-2 text-center">
          <strong
            style={{ fontWeight: "400", color: "#000", marginBottom: "10px" }}
          >
            User Profile
          </strong>
        </MDBCardTitle>

        <MDBCardBody>
          <div
            style={{ flexDirection: "column" }}
            className="d-flex align-items-center justify-content-center"
          >
            <img
              className="rounded-circle shadow"
              width={150}
              src="https://mdbootstrap.com/img/new/avatars/1.jpg"
              alt="profile-img"
            />
            <span className="h3 mt-2">{String(user?.email).split("@")[0]}</span>
            <MDBBtn className="mt-3" outline rounded onClick={() => logout()}>
              Logout
            </MDBBtn>
          </div>
        </MDBCardBody>
        <MDBCardFooter>
          <div className="d-flex align-items-center justify-content-center">
            <span className="m-1">Need Changes ?</span>
            <Link to="/update-profile">
              <span> Update Profile</span>
            </Link>
          </div>
        </MDBCardFooter>
      </MDBCard>
    </MDBContainer>
  );
}
