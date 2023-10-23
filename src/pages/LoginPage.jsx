import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function LoginPage() {
  const initialValues = {
    email: "",
    password: "",
  };
  function onSubmit(values) {
    console.log(values);
  }
  const validationSchema = Yup.object({
    email: Yup.string().required("enter email").email("enter valid email"),
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
                      <label>Email</label>
                      <Field
                        type="text"
                        name="email"
                        className={
                          formik.touched.email && formik.errors.email
                            ? "form-control is-invalid"
                            : "form-control"
                        }
                      />
                      <small className="text-danger">
                        <ErrorMessage name="email" />
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
                      Don't have an account? Sign up <Link to="/signup">here.</Link>
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
