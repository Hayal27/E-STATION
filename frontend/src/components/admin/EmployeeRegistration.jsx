
import Axios from "axios";
import React, { useEffect, useState } from "react";
import "../../assets/css/custom.css";

const EmployeeRegistration = () => {
  // State for roles, departments, supervisors, and form data
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [data, setData] = useState({
    name: "",
    role_id: "",
    department_id: "",
    supervisor_id: "",
    fname: "",
    lname: "",
    email: "",
    phone: "",
    sex: "",
  });

  // State for modal popup feedback
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState("success"); // "success" or "error"

  // Fetch roles, departments, and supervisors on component mount
  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await Axios.get("http://192.168.56.1:5000/api/roles");
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    const fetchDepartments = async () => {
      try {
        const response = await Axios.get("http://192.168.56.1:5000/api/departments");
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    const fetchSupervisors = async () => {
      try {
        const response = await Axios.get("http://192.168.56.1:5000/api/supervisors");
        setSupervisors(response.data);
      } catch (error) {
        console.error("Error fetching supervisors:", error);
      }
    };

    fetchRoles();
    fetchDepartments();
    fetchSupervisors();
  }, []);

  // Handle form data change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Submit form data to register employee and show modal with feedback
  const submit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://192.168.56.1:5000/api/addEmployee", data);
      console.log(response.data);
      // Check if response.data has a message indicating an error
      if (response.data.message) {
        setModalType("success");
        setModalMessage(response.data.message);
      } else {
        setModalType("success");
        setModalMessage("Employee SUCCESSFULLY Registered");
        setData({
          name: "",
          role_id: "",
          department_id: "",
          supervisor_id: "",
          fname: "",
          lname: "",
          email: "",
          phone: "",
          sex: "",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      setModalType("error");
      setModalMessage("An error occurred during registration.");
    }
    setShowModal(true);
  };

  return (
    <main id="main" className="employee-registration main">
      <div className="pagetitle">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Admin</a></li>
            <li className="breadcrumb-item active">Employee Registration</li>
          </ol>
        </nav>
      </div>

      <section className="section">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Employee Registration</h5>

                <form onSubmit={submit}>
                  <div className="form-group mb-3">
                    <label>First Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fname"
                      value={data.fname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Last Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="lname"
                      value={data.lname}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={data.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Sex</label>
                    <select
                      name="sex"
                      className="form-control"
                      value={data.sex}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select sex</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Employee Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={data.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group mb-3">
                    <label>Department (Optional)</label>
                    <select
                      name="department_id"
                      className="form-control"
                      value={data.department_id}
                      onChange={handleChange}
                    >
                      <option value="">Select a department (Optional)</option>
                      {departments.map((department) => (
                        <option key={department.department_id} value={department.department_id}>
                          {department.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Role</label>
                    <select
                      name="role_id"
                      className="form-control"
                      value={data.role_id}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Select a role</option>
                      {roles.map((role) => (
                        <option key={role.role_id} value={role.role_id}>
                          {role.role_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group mb-3">
                    <label>Supervisor (Optional)</label>
                    <select
                      name="supervisor_id"
                      className="form-control"
                      value={data.supervisor_id}
                      onChange={handleChange}
                    >
                      <option value="">Select a supervisor (Optional)</option>
                      {supervisors.map((supervisor) => (
                        <option key={supervisor.employee_id} value={supervisor.employee_id}>
                          {supervisor.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal fade show" style={{ display: "block" }} tabIndex="-1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{modalType === "success" ? "Success" : "Error"}</h5>
                <button type="button" className="close" onClick={() => setShowModal(false)} aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {modalMessage}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default EmployeeRegistration;
