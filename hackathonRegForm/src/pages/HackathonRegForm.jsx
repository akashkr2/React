import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";

const HackathonRegForm = () => {
  //
  const genderAPI = "/genders2.json";

  const [gender, setGender] = useState(null);
  const [state, setState] = useState(null);
  const [isLoading, setIsLoading] = useState();

  const [selectedData, setSelectedData] = useState({
    gender: "",
    state: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    state: "",
  });

  useEffect(() => {
    setIsLoading(true);
    fetch(genderAPI)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.genders);
        setGender(data.genders);
      })
      .catch((err) => {
        console.error("Error occurred in fetching data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    fetch("/states.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data.states);
        setState(data.states);
      })
      .catch((err) => {
        console.error("Error occurred in fetching data", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(e.target);
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const loadingFunc = () => {
    console.log("Data is Loading...");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", formData.name);
    console.log("Email: ", formData.email);
    console.log("Phone: ", formData.phone);
    console.log("DOB: ", formData.dob);
    console.log("Gender: ", formData.gender);
    console.log("Address: ", formData.address);
    console.log("State: ", formData.state);
    alert("Form Submitted Successfuly");
    setFormData({
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      address: "",
      state: "",
    });
  };

  //   console.log(gender[0]);

  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-r from-blue-950 to-blue-50 flex flex-col items-center justify-center text-white overflow-x-hidden overflow-y-scroll">
        <nav className="w-screen sticky top-0 left-0 bg-black px-4 py-1.5 flex items-center z-10">
          <h1 className=" text-start">Coding School</h1>
          
        </nav>
        <div className="form w-lg rounded bg-white text-black mt-32 mb-16 py-4 flex flex-col items-center drop-shadow-2xl">
            <h1 className="regHead onHoverUnderline p-2">Register For Hackathon</h1>
            {/* <div className="h-[9vh] w-[90%] absolute top-[4.5vh] border-2 scale-y-[0] hover:scale-y-[1]"></div> */}
          <form
            className="w-md flex flex-col items-center gap-2.5"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              className="form-control shadow"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              className="form-control shadow"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Enter Your Phone No"
              className="form-control shadow"
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="date"
              name="dob"
              className="form-control shadow"
              value={formData.dob}
              onChange={handleChange}
            />
            <select
              name="gender"
              className="form-control shadow"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">--Select Your Gender--</option>
              {/* {isLoading
                ? loadingFunc()
                : gender &&
                  gender.map((data, index) => {
                    return data.origin ? (
                      data.origin === "Modern" ? (
                        <option key={index} value={data.value}>
                          {data.label}
                        </option>
                      ) : (
                        <option key={index} value={data.value}>
                          {data.label} ({data.origin})
                        </option>
                      )
                    ) : (
                      <option key={index} value={data.value}>
                        {data.label}
                      </option>
                    );
                  })} */}
              {isLoading
                ? loadingFunc()
                : gender &&
                  gender.map((data, index) => {
                    return (
                      <option key={index} value={data.value}>
                        {data.label}
                      </option>
                    );
                  })}
            </select>
            <textarea
              name="address"
              rows="3"
              placeholder="Enter Your Complete Address"
              className="form-control shadow"
              value={formData.address}
              onChange={handleChange}
            ></textarea>
            <select
              name="state"
              className="form-control shadow"
              value={formData.state}
              onChange={handleChange}
            >
              <option value="">--State--</option>
              {isLoading
                ? loadingFunc()
                : state &&
                  state.map((data, index) => {
                    return data.type ? (
                      <option key={index} value={data.name}>
                        {data.name} ({data.type})
                      </option>
                    ) : (
                      <option key={index} value={data.name}>
                        {data.name}
                      </option>
                    );
                  })}
            </select>
            <button type="submit" className="btn btn-primary w-48 shadow">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default HackathonRegForm;
