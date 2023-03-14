import React, { useState } from "react";
import TutorialDataService from "../services/TutorialService";

const AddTutorial = () => {
  const initialTutorialState = {
    id: null,
    Id: "",
    Name: "",
    OrderId: "",
    Message: "",
  };
  const [tutorial, setTutorial] = useState(initialTutorialState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
  };

  const saveTutorial = () => {
    var data = {
      Id: tutorial.Id,
      Name: tutorial.Name,
      OrderId: tutorial.OrderId,
      Message: tutorial.Message
    };

    TutorialDataService.create(data)
      .then(response => {
        setTutorial({
          id: response.data.id,
          Id: response.data.Id,
          Name: response.data.Name,
          OrderId: response.data.OrderId,
          Message: response.data.Message,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newTutorial = () => {
    setTutorial(initialTutorialState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newTutorial}>
            Add
          </button>
        </div>
      ) : (
        <div>

          <div className="form-group">
            <label htmlFor="Id">Id</label>
            <input
              type="text"
              className="form-control"
              id="Id"
              required
              value={tutorial.Id}
              onChange={handleInputChange}
              name="Id"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              className="form-control"
              id="Name"
              required
              value={tutorial.Name}
              onChange={handleInputChange}
              name="Name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="OrderId">OrderId</label>
            <input
              type="text"
              className="form-control"
              id="OrderId"
              required
              value={tutorial.OrderId}
              onChange={handleInputChange}
              name="OrderId"
            />
          </div>

          <div className="form-group">
            <label htmlFor="Message">Message</label>
            <input
              type="text"
              className="form-control"
              id="Message"
              required
              value={tutorial.Message}
              onChange={handleInputChange}
              name="Message"
            />
          </div>

          <button onClick={saveTutorial} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddTutorial;
