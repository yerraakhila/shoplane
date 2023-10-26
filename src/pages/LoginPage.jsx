import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function LoginPage() {
  let navigate = useNavigate()
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
      .post(
        "https://fakestoreapi.com/auth/login",
        values
      )
      .then(
        (response) => {
          setRequestResponse({
            textMessage: "Login is successful",
            alertClass: "alert alert-success",
          });
          localStorage.setItem('token',response.data.token);
          localStorage.setItem('user',JSON.stringify(response.data.user));
          navigate("/")
        },
        (error) => {
          setRequestResponse({
            textMessage: "invalid credentials",
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
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <div className="wrapper">
            <div class={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2>Login</h2>
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
                      <label>Username</label>
                      <Field
                        type="text"
                        name="username"
                        className={
                          formik.touched.username && formik.errors.username
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <small className="text-danger">
                        <ErrorMessage name="username" />
                      </small>
                    </div>
                    <div className="form-group">
                      <label>Password</label>
                      <Field
                        type="text"
                        name="password"
                        className={
                          formik.touched.password && formik.errors.password
                            ? "form-control is-invalid"
                            : "form-control"
                        }
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
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default LoginPage;
