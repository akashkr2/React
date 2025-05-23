import React, { useEffect, useState } from "react";
import { data } from "react-router-dom";

const Contact = () => {
  //
  const myEmail = "akashkrsinghjmp@gmail.com";
  const myPhone = "+91 7857888572";
  const countryCallingAPI = "/countryCallingCodes.json";
  const reasons = [
    "Collaboration",
    "Freelance Project",
    "Job Opportunity",
    "Feedback",
    "Other",
  ];

  const [countryList, setCountryList] = useState([]);
  const [dialCodeList, setDialCodeList] = useState([]);

  // const countryList = [];
  // const callingCodeList = [];
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(countryCallingAPI)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        data.map((innerData) => {
          setCountryList((prevCountryList) => [
            ...prevCountryList,
            innerData.name,
          ]);
          setDialCodeList((prevDialCodeList) => [
            ...prevDialCodeList,
            innerData.dial_code,
          ]);
        });
      })
      .catch((err) => {
        console.error("Error occurred while fetching the data", err);
      })
      .finally(() => {
        console.log("Fetch process complete");
        setLoading(false);
      });
  }, []);

  const [selectedData, setSelectedData] = useState({
    cName: "",
    cEmail: "",
    cCountry: "",
    cDialCode: "",
    cPhone: "",
    cSubject: "",
    cOrganisation: "",
    cMessage: "",
    cPrefContactMethod: "",
    cContactTiming: [],
    cConsent: [],
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    if (type === "checkbox") {
      setSelectedData((prev) => {
        if (checked) {
          return { ...prev, [name]: [...prev[name], value] };
        } //
        else {
          return {
            ...prev,
            [name]: prev[name].filter((item) => item !== value),
          };
        }
      });
    } else {
      setSelectedData((prev) => ({ ...prev, [name]: value }));
    }
    // console.log(name, selectedData[name]);
    // console.log(name, ":", value);
    for (let data in selectedData) {
      console.log(data, ":", selectedData[data]);
    }
    // console.log(selectedData);
    console.log(".");
  };

  return (
    <>
      <div className="contact px-5 relative overflow-x-hidden">
        <div className="info grid items-center justify-start">
          <h1 className="head text-3xl md:text-4xl font-bold text-start mb-4">
            Let's Connect
          </h1>
          <p className="text-start text-gray-300 mb-8 max-w-xl mx-auto">
            Have a project idea, collaboration opportunity, or just want to say
            hi? I'd love to hear from you. Drop a message and let's build
            something awesome together!
          </p>
        </div>
        <form className="absolute left-[25%] w-[100%]">
          <div className="formDiv grid gap-3 justify-between border-1 bg-cyan-300 border-gray-400 rounded p-4 px-3 pb-3 w-[45%]">
            <div className="inputs grid gap-3 items-center">
              <div className="cNameDiv flex gap-2">
                <label
                  htmlFor="cNameIP"
                  className="border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Name:
                </label>
                <input
                  type="text"
                  name="cName"
                  id="cNameIP"
                  value={selectedData.cName}
                  onChange={handleChange}
                  required
                  placeholder="Enter Your Name"
                  className="form-control2 w-2/3"
                />
              </div>
              <div className="cEmailDiv flex gap-2">
                <label
                  htmlFor="cEmailIP"
                  className="border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Email:
                </label>
                <input
                  type="cEmail"
                  name="cEmail"
                  id="cEmailIP"
                  required
                  value={selectedData.cEmail}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                  className="form-control2 w-2/3"
                />
              </div>
              <div className="cCountryDiv flex gap-2">
                <label
                  htmlFor="cCountryIP"
                  className="border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Country:
                </label>
                <select
                  name="cCountry"
                  id="cCountryIP"
                  required
                  value={selectedData.cCountry}
                  onChange={handleChange}
                  className="form-control2 w-2/3"
                >
                  <option value="" disabled>
                    --Select Country--
                  </option>
                  {loading
                    ? console.log("Loading...")
                    : countryList &&
                      countryList.map((country, index) => {
                        return (
                          <option key={index} value={country}>
                            {country}
                          </option>
                        );
                      })}
                </select>
              </div>
              <div className="cPhoneDiv flex gap-2">
                <label
                  htmlFor="cPhoneIP"
                  className="border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Phone:
                </label>
                <div className="flex gap-2 w-2/3">
                  <select
                    name="cDialCode"
                    id="cDialCodeIP"
                    value={selectedData.cDialCode}
                    onChange={handleChange}
                    className="form-control2 p-0 w-7/24"
                  >
                    <option value="" disabled>
                      --Select Dial Code--
                    </option>
                    {loading
                      ? console.log("Loading...")
                      : dialCodeList &&
                        dialCodeList.map((dialCode, index) => {
                          return (
                            <option key={index} value={dialCode}>
                              {dialCode}
                            </option>
                          );
                        })}
                  </select>
                  <input
                    type="tel"
                    name="cPhone"
                    id="cPhoneIP"
                    value={selectedData.cPhone}
                    onChange={handleChange}
                    placeholder="Enter Phone No (optional)"
                    // pattern="^[6-9]\d{9}$"
                    // title="Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9"
                    className="form-control2 w-19/24"
                  />
                </div>
              </div>
              <div className="cSubjectDiv flex gap-2">
                <label
                  htmlFor="cSubjectIP"
                  className="border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Subject:
                </label>
                <select
                  name="cSubject"
                  id="cSubjectIP"
                  required
                  value={selectedData.cSubject}
                  onChange={handleChange}
                  className="form-control2 w-2/3"
                >
                  <option value="">--Select a reason--</option>
                  {reasons.map((reason, index) => {
                    return (
                      <option key={index} value={reason}>
                        {reason}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="cOrganisationDiv flex gap-2">
                <label
                  htmlFor="cOrganisationIP"
                  className="border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Organisation:
                </label>
                <input
                  type="text"
                  name="cOrganisation"
                  id="cOrganisationIP"
                  value={selectedData.cOrganisation}
                  onChange={handleChange}
                  placeholder="Your Organization (optional)"
                  className="form-control2 w-2/3"
                />
              </div>
              <div className="cMessageDiv flex gap-2">
                <label
                  htmlFor="cMessageIP"
                  className="border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Message:
                </label>
                <textarea
                  name="cMessage"
                  id="cMessageIP"
                  value={selectedData.cMessage}
                  onChange={handleChange}
                  placeholder="Enter Your Message"
                  className="form-control2 w-2/3"
                ></textarea>
              </div>
              <div className="cPrefContactMethodDiv flex gap-2">
                <label
                  htmlFor="cPrefContactMethodIP"
                  className="flex border-1 border-black px-3 py-1 rounded text-lg w-2/3"
                >
                  Preferred Contact Method:
                </label>
                <div className="form-control2 w-1/3 flex justify-between">
                  <div className="px-3 py-1 flex gap-3">
                    <input
                      type="radio"
                      name="cPrefContactMethod"
                      id="prefEmail"
                      value="email"
                      checked={selectedData.cPrefContactMethod === "email"}
                      onChange={handleChange}
                      // defaultChecked
                    />
                    <label htmlFor="prefEmail" className="">
                      Email
                    </label>
                  </div>
                  <div className="px-3 py-1 flex gap-3">
                    <input
                      type="radio"
                      name="cPrefContactMethod"
                      id="prefMobile"
                      value="mobile"
                      checked={selectedData.cPrefContactMethod === "mobile"}
                      onChange={handleChange}
                    />
                    <label htmlFor="prefMobile" className="">
                      Mobile
                    </label>
                  </div>
                </div>
              </div>
              <div className="cContactTimingDiv flex gap-2">
                <label
                  htmlFor="cContactTimingIP"
                  className="flex border-1 border-black px-3 py-1 rounded text-lg w-1/3"
                >
                  Preferred Contact Time:
                </label>
                <div className="form-control2 w-2/3 flex justify-between">
                  <div className="px-3 py-1 flex gap-3">
                    <input
                      type="checkbox"
                      name="cContactTiming"
                      id="timeMorning"
                      value="morning"
                      checked={selectedData.cContactTiming.includes("morning")}
                      onChange={handleChange}
                      // defaultChecked
                    />
                    <label htmlFor="timeMorning" className="">
                      Morning (10AM - 12PM)
                    </label>
                  </div>
                  <div className="px-3 py-1 flex gap-3">
                    <input
                      type="checkbox"
                      name="cContactTiming"
                      id="timeAfternoon"
                      value="afternoon"
                      checked={selectedData.cContactTiming.includes(
                        "afternoon"
                      )}
                      onChange={handleChange}
                    />
                    <label htmlFor="timeAfternoon" className="">
                      Afternoon (12PM - 3PM)
                    </label>
                  </div>
                  <div className="px-3 py-1 flex gap-3">
                    <input
                      type="checkbox"
                      name="cContactTiming"
                      id="timeEvening"
                      value="evening"
                      checked={selectedData.cContactTiming.includes("evening")}
                      onChange={handleChange}
                    />
                    <label htmlFor="timeEvening" className="">
                      Evening (3PM - 8PM)
                    </label>
                  </div>
                </div>
              </div>
              <div className="cConsentDiv flex gap-2">
                <div className="flex gap-2 border-1 border-black px-3 py-1 rounded text-lg w-3/3">
                  <input
                    type="checkbox"
                    name="cConsent"
                    id="cConsentIP"
                    value="agree"
                    checked={selectedData.cConsent.includes("agree")}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="cConsentIP" className="">
                    I agree to be contacted regarding my message.
                  </label>
                </div>
              </div>
            </div>
            <div className="submitButtonDiv flex items-center justify-center">
              <button
                type="submit"
                className="bg-blue-700 text-white px-3 py-2 rounded hover:bg-blue-600"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
