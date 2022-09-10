import React from "react";
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
import { Link } from "react-router-dom";

export function Dashboard() {
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
          <div style={{ flexDirection: "column" }}>
            <img />
            <span></span>
            <MDBBtn>Logout</MDBBtn>
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
