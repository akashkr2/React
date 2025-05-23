import React, { useEffect, useState } from "react";

const BasicForm = () => {
  //
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [phone, setPhone] = useState("");
  //   const [password, setPassword] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // useEffect(() => {
  //   console.log("I Am BasicFormCopy I Will At Every Component Change");
  // });
  useEffect(() => {
    console.log("I Am BasicFormCopy I Will Run Once");
  }, []);
  useEffect(() => {
    console.log("I Am BasicFormCopy I Will At Name Change");
  }, [formData.name]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Name: ", formData.name);
    // console.log("Email: ", formData.email);
    // console.log("Phone: ", formData.phone);
    // console.log("Password: ", formData.password);
    console.log(formData);
    console.log();
  };

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
                  value={formData.name}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  id="emailIP"
                  placeholder="Enter Your Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="tel"
                  name="phone"
                  id="phoneIP"
                  placeholder="Enter Your Mobile No"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  id="passwordIP"
                  placeholder="Create Password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
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
