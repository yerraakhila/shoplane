import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { saveUser } from "../helper/user";

function LoginPage() {
  let navigate = useNavigate();
  const [requestResponse, setRequestResponse] = useState({
    textMessage: "",
    alertClass: "",
  });
  const initialValues = {
    username: "",
    password: "",
  };
  function onSubmit(values) {
    axios
      .post("https://fakestoreapi.com/auth/login", values)
      .then(
        (response) => {
          setRequestResponse({
            textMessage: "Login is successful",
            alertClass: "alert alert-success",
          });
          saveUser(values.username, response.data.token);
          navigate("/");
        },
        (error) => {
          setRequestResponse({
            textMessage: error.response.data,
            alertClass: "alert alert-danger",
          });
        }
      )
      .catch((error) => console.log(error));
  }
  const validationSchema = Yup.object({
    username: Yup.string().required("enter username"),
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
            <div className="wrapper">
              <div class={requestResponse.alertClass} role="alert">
                {requestResponse.textMessage}
              </div>
              <h2>Login</h2>
              <hr style={{ marginBottom: "30px" }} />
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
                        <label style={{ fontWeight: "600" }}>Username:</label>
                        <Field
                          type="text"
                          name="username"
                          className={
                            formik.touched.username && formik.errors.username
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          style={{ backgroundColor: "#f2f6f7" }}
                        />
                        <small className="text-danger">
                          <ErrorMessage name="username" />
                        </small>
                      </div>
                      <div className="form-group">
                        <label style={{ fontWeight: "600" }}>Password:</label>
                        <Field
                          type="password"
                          name="password"
                          className={
                            formik.touched.password && formik.errors.password
                              ? "form-control is-invalid"
                              : "form-control"
                          }
                          style={{ backgroundColor: "#f2f6f7" }}
                        />
                        <small className="text-danger">
                          <ErrorMessage name="password" />
                        </small>
                      </div>
                      <br />
                      <p className="text-center">
                        Don't have an account? Sign up{" "}
                        <Link to="/signup">here.</Link>
                      </p>
                      <Field
                        type="submit"
                        value="Login"
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

export default LoginPage;
