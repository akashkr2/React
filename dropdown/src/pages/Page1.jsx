import React, { useEffect, useState } from "react";

const Page1 = () => {
  //

  const [type, setType] = useState(null);
  const [language, setLanguage] = useState(null);
  const [genre, setGenre] = useState(null);
  const [loading, setLoading] = useState();

  const [selectedData, setSelectedData] = useState({
    type: "",
    language: "",
    genre: "",
  });

  const loadingFunc = () => {
    console.log("Loading Data...");
  };

  useEffect(() => {
    setLoading(true);
    fetch("/movie.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setType(data.type);
        setLanguage(data.language);
        setGenre(data.genre);
      })
      .catch((err) => {
        console.error("Error Occurred in fetching Data", err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit Button Clicked");
    console.log("Type: ", selectedData.type);
    console.log("Language: ", selectedData.language);
    console.log("Genre: ", selectedData.genre);
  };

  //   console.log(type, language, genre);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="container bg-primary p-5 mx-auto my-5 rounded">
        <form onSubmit={handleSubmit}>
          <div className="d-flex gap-4">
            <select
              name="type"
              className="form-control"
              value={selectedData.type}
              onChange={handleChange}
            >
              <option value="">--Select Movie Type--</option>
              {loading
                ? loadingFunc()
                : type &&
                  type.map((element, index) => {
                    return (
                      <option key={index} value={element}>
                        {element}
                      </option>
                    );
                  })}
            </select>

            <select
              name="language"
              className="form-control"
              value={selectedData.language}
              onChange={handleChange}
            >
              <option value="">--Select Language--</option>
              {loading
                ? loadingFunc()
                : language &&
                  language.map((element, index) => {
                    return (
                      <option key={index} value={element}>
                        {element}
                      </option>
                    );
                  })}
            </select>

            <select
              name="genre"
              className="form-control"
              value={selectedData.genre}
              onChange={handleChange}
            >
              <option value="">--Select Genre--</option>
              {loading
                ? loadingFunc()
                : genre &&
                  genre.map((element, index) => {
                    return (
                      <option key={index} value={element}>
                        {element}
                      </option>
                    );
                  })}
            </select>

            <button type="submit" className="btn btn-success">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Page1;
