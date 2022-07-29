import React, {useState} from "react";
import "./Profile.css";
import {useSelector, useDispatch} from "react-redux";
import {updateUser} from "../reducers/User";
/** get user date and updates
 *
 * state: formData, message
 *
 * context: currentUser
 *
 */
function ProfileForm() {
  let currentUser = useSelector((state) => state.user.user);
  console.log("ldskfjalkdjsfklajdsflkajf", currentUser);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
  });
  const [message, setMessage] = useState(null);

  /**  updates updateData state */
  async function handleSubmit(evt) {
    evt.preventDefault();
    const updateData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
    };
    try {
      const result = dispatch(updateUser(currentUser.username, updateData));
      console.log(result);
    } catch (err) {
      console.log(err);
      setMessage(err);
      return;
    }

    setMessage("Updated Successfully");
  }

  /** update formDate state */
  function handleChange(evt) {
    const {name, value} = evt.target;
    setFormData((data) => ({...data, [name]: value}));
  }
  return (
    <div>
      <form className="formDisplay" onSubmit={handleSubmit}>
        <label htmlFor="username">Username </label>
        <input
          className="input"
          disabled
          name="username"
          value={formData.username}
        />
        <label htmlFor="firstName">First Name </label>
        <input
          className="input"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name </label>
        <input
          className="input"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email </label>
        <input
          className="input"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button>Edit User</button>
        <div className="applied">
          <h2>Applied to {currentUser.applications.length} jobs</h2>
        </div>
      </form>

      {message && <h4> {message}</h4>}
    </div>
  );
}

export default ProfileForm;
