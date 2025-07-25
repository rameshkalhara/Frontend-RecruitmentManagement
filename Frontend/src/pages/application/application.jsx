import React, { useState } from "react";
import { Search, Upload, Edit, Eye } from "lucide-react";
import "./Application.css";

const Application = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [applications] = useState([
    {
      id: "001",
      name: "Name",
      dptHead: "Dpt Head",
      noOfUsers: 20,
      isActive: true
    },
    {
      id: "002",
      name: "Name",
      dptHead: "Dpt Head",
      noOfUsers: 20,
      isActive: true
    },
    {
      id: "003",
      name: "Name",
      dptHead: "Dpt Head",
      noOfUsers: 20,
      isActive: true
    }
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUpload = () => {
    console.log("Upload clicked");
  };

  const handleEdit = (id) => {
    console.log("Edit clicked for ID:", id);
  };

  const handleView = (id) => {
    console.log("View clicked for ID:", id);
  };

  const toggleStatus = (id) => {
    console.log("Toggle status for ID:", id);
  };

  const filteredApplications = applications.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="applications-page">
      {/* Main Content */}
      <div className="main-content">
        <div className="content-container">
          {/* Header */}
          <div className="page-header">
            <h1 className="page-title">Applications Management</h1>
          </div>

          {/* Search and Upload Section */}
          <div className="controls-section">
            <div className="search-container">
              <div className="search-icon">
                <Search className="icon" />
              </div>
              <input
                type="text"
                placeholder="Search by Job Role"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
            </div>
            <button onClick={handleUpload} className="upload-btn">
              <Upload className="btn-icon" />
              Upload
            </button>
          </div>

          {/* Table */}
          <div className="table-container">
            <table className="applications-table">
              <thead className="table-header">
                <tr>
                  <th className="table-th">ID</th>
                  <th className="table-th">Name</th>
                  <th className="table-th">Dpt Head</th>
                  <th className="table-th">No of users</th>
                  <th className="table-th-last">Action</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {filteredApplications.map((app, index) => (
                  <tr key={app.id} className="table-row">
                    <td className="table-td">{app.id}</td>
                    <td className="table-td">{app.name}</td>
                    <td className="table-td">{app.dptHead}</td>
                    <td className="table-td">{app.noOfUsers}</td>
                    <td className="table-td-last">
                      <div className="action-buttons">
                        <button
                          onClick={() => handleEdit(app.id)}
                          className="action-btn edit-btn"
                          title="Edit"
                        >
                          <Edit className="action-icon" />
                        </button>
                        <button
                          onClick={() => handleView(app.id)}
                          className="action-btn view-btn"
                          title="View"
                        >
                          <Eye className="action-icon" />
                        </button>
                        <label className="toggle-switch">
                          <input
                            type="checkbox"
                            checked={app.isActive}
                            onChange={() => toggleStatus(app.id)}
                            className="toggle-input"
                          />
                          <div className="toggle-slider"></div>
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredApplications.length === 0 && (
            <div className="empty-state">
              <p className="empty-message">No applications found matching your search.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Application;