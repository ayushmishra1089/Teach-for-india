import React, { useState } from "react";

const Form = () => {
  const [userRegistration, setUserRegistration] = useState({
    name: " ",
    email: " ",
    age: " ",
    Location: " ",
    Language: " ",
    password: "",
  });

  const [records, setRecords] = useState([]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserRegistration({ ...userRegistration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecord = {
      ...userRegistration,
      id: new Date().getTime().toString(),
    };

    setRecords([...records, newRecord]);

    setUserRegistration({
      name: "",
      email: "",
      age: " ",
      Location: " ",
      password: " ",
      Language: " ",
    });
  };
  // };
  return (
    <>
      <div className="w3-container">
        <form action=" " onSubmit={handleSubmit}>
          <h2 className="w3-container w3-blue"> Teach For India </h2>

          <label>Name:</label>
          <br />
          <input
            id="name"
            name="name"
            class="w3-input w3-border"
            type="text"
            value={userRegistration.name}
            required
            onChange={handleChange}
          />

          <br />
          <label>Age:</label>
          <br />
          <input
            id="age"
            name="age"
            class="w3-input w3-border"
            type="number"
            value={userRegistration.age}
            required
            onChange={handleChange}
          />

          <br />
          <label>Email:</label>
          <br />
          <input
            id="email"
            name="email"
            class="w3-input w3-border"
            type="email"
            value={userRegistration.email}
            required
            onChange={handleChange}
          />

          <br />
          <label>Password:</label>
          <br />
          <input
            id="password"
            name="password"
            class="w3-input w3-border"
            type="password"
            value={userRegistration.password}
            required
            onChange={handleChange}
          />

          <br />

          <label>Location:</label>
          <br />

          <input
            id="Location"
            name="Location"
            class="w3-input w3-border"
            type="text"
            value={userRegistration.Location}
            required
            onChange={handleChange}
          />
          <br />

          <label>Spoken language:</label>
          <br />

          <input
            id="Language"
            name="Language"
            class="w3-input w3-border"
            type="text"
            value={userRegistration.Language}
            required
            onChange={handleChange}
          />
          <br />

          <input class="w3-btn w3-blue" type="submit" value="Submit" />
        </form>
        <div>
          {records.map((curElem) => {
            return (
              <table className="w3-table w3-striped w3-bordered">
                <tr>
                  <th> Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Location</th>
                  <th>Language</th>
                </tr>
                <tr>
                  <td>{curElem.name}</td>
                  <td>{curElem.age}</td>
                  <td>{curElem.email}</td>
                  <td>{curElem.Location}</td>
                  <td>{curElem.Language}</td>
                </tr>
              </table>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Form;
