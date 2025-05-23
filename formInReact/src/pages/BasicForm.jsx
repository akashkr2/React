import React, { useEffect, useState } from "react";

const BasicForm = () => {
  //
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Password: ", password);
  };

  useEffect(() => {
    console.log("I Am BasicForm");
  });

  return (
    <>
      <div>
        <div className="mainForm d-grid align-items-center justify-content-center mt-5">
          <form onSubmit={handleSubmit}>
            <div className="formDiv bg-light rounded d-grid gap-2 p-2 align-items-center justify-content-center">
              <div className="inputDiv d-grid gap-2 p-3 ">
                <input
                  type="text"
                  name="name"
                  id="nameIP"
                  placeholder="Enter Your Name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value.trim())}
                />
                <input
                  type="email"
                  name="email"
                  id="emailIP"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value.trim())}
                />
                <input
                  type="tel"
                  name="phone"
                  id="phoneIP"
                  placeholder="Enter Your Mobile No"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.trim())}
                />
                <input
                  type="password"
                  name="password"
                  id="passwordIP"
                  placeholder="Create Password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value.trim())}
                />
              </div>
              <div className="buttonDiv d-flex justify-content-center">
                <button type="submit" className="btn btn-primary w-50">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default BasicForm;
