import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function RegisterPage() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  };
  const [responseRequest, setResponseRequest] = useState({
    textMessage: "",
    alertClass: "",
  });
  function onSubmit(values) {
    axios
      .post("https://fakestoreapi.com/users", values)
      .then(
        (response) => {
          setResponseRequest({
            textMessage:
              "Registration is successful. Click 'here' at bottom to login",
            alertClass: "alert alert-success",
          });
        },
        (error) => {
          setResponseRequest({
            textMessage: error.response.data.message,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  }
  const validationSchema = Yup.object({
    firstName: Yup.string().required("enter first name"),
    lastName: Yup.string().required("enter last name"),
    email: Yup.string().required("enter email").email("enter valid email"),
    mobile: Yup.string().required("enter mobile number"),
    password: Yup.string()
      .required("enter password")
      .min(6, "password must be minimum of 6 characters"),
  });
  return (
    <div className="login-center" style={{ backgroundColor: "#f7f0f0" }}>
      <div className="container">
        <div className="row">
          <div className="one-fourth"></div>
          <div className="half">
            <div style={{ padding: "25px" }} className="wrapper">
              <div class={responseRequest.alertClass} role="alert">
                {responseRequest.textMessage}
              </div>

              <h2 style={{ marginBottom: "30px" }}>Sign up</h2>
              <hr />
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnMount
                onSubmit={onSubmit}
              >
                {(formik) => {
                  return (
                    <Form>
                      <div className="form-group">
                        <label style={{ fontWeight: "600" }}>First Name</label>
                        <Field
                          name="firstName"
                          className={
                            formik.touched.firstName && formik.errors.firstName
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          type="text"
                          style={{ backgroundColor: "#f2f6f7" }}
                        />
                        <small className="text-danger">
                          <ErrorMessage name="firstName" />
                        </small>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: "600" }}>Last Name</label>
                        <Field
                          name="lastName"
                          className={
                            formik.touched.lastName && formik.errors.lastName
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          type="text"
                          style={{ backgroundColor: "#f2f6f7" }}
                        />
                        <small className="text-danger">
                          <ErrorMessage name="lastName" />
                        </small>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: "600" }}>Email</label>
                        <Field
                          name="email"
                          className={
                            formik.touched.email && formik.errors.email
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          type="text"
                          style={{ backgroundColor: "#f2f6f7" }}
                        />
                        <small className="text-danger">
                          <ErrorMessage name="email" />
                        </small>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: "600" }}>Mobile</label>
                        <Field
                          name="mobile"
                          className={
                            formik.touched.mobile && formik.errors.mobile
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          type="number"
                          style={{ backgroundColor: "#f2f6f7" }}
                        />
                        <small className="text-danger">
                          <ErrorMessage name="mobile" />
                        </small>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: "600" }}>Password</label>
                        <Field
                          name="password"
                          className={
                            formik.touched.password && formik.errors.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          type="password"
                          style={{ backgroundColor: "#f2f6f7" }}
                        />
                        <small className="text-danger">
                          <ErrorMessage name="password" />
                        </small>
                      </div>
                      <br />
                      <p className="text-center">
                        Already have an account? Login{" "}
                        <Link to="/login">here.</Link>
                      </p>
                      <Field
                        type="submit"
                        value="Register"
                        className="btn btn-primary btn-block"
                        disabled={!formik.isValid}
                      />
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
          <div className="one-fourth"></div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
