import React, {useState} from "react";
import "./Sign.css";
/** Sign up user
 *
 * prop: signUp parent function
 *
 * state: formData
 *
 * Aop -> SignUp
 */
function SignUp({signUp}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  });
  const [message, setMessage] = useState(null);

  /** submits form data calls parent function */
  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUp(formData);
      setMessage(null);
    } catch (err) {
      console.log("this the err", err);
      setMessage(err);
    }
  }

  /** update fromData state on change */
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData((data) => ({...data, [name]: value}));
  }
  return (
    <div>
      <form className="formDisplay" onSubmit={handleSubmit}>
        <label className="label" forhtml="username">
          Username{" "}
        </label>
        <input
          className="input"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <label className="label" forhtml="password">
          Password{" "}
        </label>
        <input
          className="input"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <label className="label" forhtml="firstName">
          First Name{" "}
        </label>
        <input
          className="input"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <label className="label" forhtml="lastName">
          Last Name{" "}
        </label>
        <input
          className="input"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <label className="label" forhtml="email">
          Email{" "}
        </label>
        <input
          className="input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button className="btn btn-secondary">Sign Up</button>
        {message &&
          message.map((msg) => (
            <h4
              key={msg}
              className="alert alert-danger"
              style={{
                marginLeft: "700px",
                marginRight: "700px",
                marginTop: "15px",
              }}
            >
              {msg}
            </h4>
          ))}
      </form>
    </div>
  );
}

export default SignUp;
