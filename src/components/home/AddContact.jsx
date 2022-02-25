import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";

const AddContact = ({ contacts, addContact }) => {
  const [date, setDate] = useState("2022-02-02");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [departament, setDepartament] = useState("");
  const [perman, setPerman] = useState(false);

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkContactEmailExists = contacts.filter((contact) =>
      contact.email === email ? contact : null
    );
    const checkContactPhoneExists = contacts.filter((contact) =>
      contact.phone === phone ? contact : null
    );
    if (checkContactEmailExists.length > 0) {
      return toast.error("This email already exists!!");
    }
    if (checkContactPhoneExists.length > 10) {
      return toast.error("This phone number already exists!!");
    }

    if (!email || !name || !phone || !city || !perman) {
      return toast.warning("Please fill in all fields!!");
    }

    const data = {
      id: contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 0,
      email,
      name,
      phone,
      date,
      city,
      perman,
    };

    addContact(data);
    toast.success("Contact added successfully!!");
    history.push("/");
  };

  const resetFunc = () => {
    setName("");
    setCity("");
    setEmail("");
    setPhone("");
    setDate("2022-02-02");
    setPerman(false);
  };

  return (
    <>
      <div className="text-center p-3 ">
        <h2 className="display-2">Add Post</h2>
      </div>
      <form className="shadow p-5 m-lg-2 mb-20" onSubmit={handleSubmit}>
        <div className="form row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault01">First name</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault01"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault02">Email</label>
            <input
              type="email"
              className="form-control"
              id="validationDefault02"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form row">
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">Mobile</label>
            <input
              type="number"
              className="form-control"
              id="validationDefault03"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault03">City</label>
            <input
              type="text"
              className="form-control"
              id="validationDefault03"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="validationDefault05">Date</label>
            <input
              type="date"
              value={date}
              onChange={(event) => setDate(new Date(event.target.value))}
              className="form-control"
            />
          </div>
          <div className="col-md-3 mb-3">
            <p className="m-0 p-0">
              <label htmlFor="validationDefault04 ">Departament</label>
            </p>
            <select
              className="custom-select"
              id="validationDefault04"
              required
              value={departament}
              onChange={(e) => setDepartament(e.target.value)}
            >
              <option defaultValue={departament} disabled>
                None
              </option>
              <option value="devloment">Devloment</option>
              <option value="marketng">Marketing</option>
              <option value="accounting">Accounting</option>
              <option value="hr">HR</option>
            </select>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="invalidCheck2"
              defaultChecked={perman}
              onChange={() => setPerman(!perman)}
            />
            <label className="form-check-label" htmlFor="invalidCheck2">
              Agree to terms and conditions
            </label>
          </div>
        </div>
        <div className="d-flex row w-30">
          <button className="btn btn-primary mt-4  ml-4" type="submit">
            Add Post
          </button>
          <button
            className="btn btn-success mt-4  ml-4"
            type="submit"
            onClick={resetFunc}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});
const mapDispatchToProps = (dispatch) => ({
  addContact: (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
