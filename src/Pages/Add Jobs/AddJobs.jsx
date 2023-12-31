import { useState } from "react";
import "./AddJobs.css";
import addJobLogo from "./add job.png";
import axios from "axios";
import { Form, Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const AddJobs = () => {
  const navigate = useNavigate();
  const URL = "http://localhost:9000/jobs";

  const [jobData, setJobData] = useState({
    title: "",
    logo: "",
    companyName: "",
    position: "",
    description: "",
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;
    setJobData({
      ...jobData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputFild = (e) => {
    e.preventDefault();
    if (
      jobData.title.trim() === "" ||
      jobData.logo.trim() === "" ||
      jobData.companyName.trim() === "" ||
      jobData.position.trim() === "" ||
      jobData.description.trim()
    ) {
      Swal.fire({
        title: "Job Add Successfully",
        icon: "success",
      });
      navigate("/users");
    } else {
      Swal.fire({
        title: "Add Valid Job Info",
        icon: "warning",
      });
    }
    axios.post(URL, jobData).then((response) => {
      setJobData(response.data);
    });
  };

  return (
    <div>
      <div className="AddJobConatiner">
        <div className="formBox">
          <Form method="post" action="/users">
            <div className="inputFild">
              <div className="inputBoxArea">
                <div>
                  <img className="conatctImg" src={addJobLogo} alt="" />
                </div>
                <h1 className="contactHeading">Add Jobs</h1>
                <input
                  name="title"
                  required
                  type="text"
                  placeholder="Job Title"
                />{" "}
                <br />
                <input
                  name="logo"
                  required
                  type="url"
                  placeholder="Logo Link"
                />{" "}
                <br />
                <input
                  name="companyName"
                  required
                  type="text"
                  placeholder="Company Name"
                />{" "}
                <br />
                <input
                  name="position"
                  required
                  type="text"
                  placeholder="Job Position"
                />{" "}
                <br />
                <input
                  name="description"
                  required
                  type="text"
                  placeholder="Short Description"
                />{" "}
                <br />
                {/* <Link to="/users"> */}
                <button navigate="/users" type="submit" className="submitBtn">
                  Add Job
                </button>
                {/* </Link> */}
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddJobs;
