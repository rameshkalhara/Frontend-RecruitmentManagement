import React, { useState } from "react";
import { Search, Upload, Edit, Eye } from "lucide-react";
import "./Application.css";
import UploadModal from "../popup/uploadApplication/uploadApplication.jsx";
const Application = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [applications] = useState([
    {
      id: "001",
      name: "Name",
      dptHead: "Dpt Head",
      noOfUsers: 20,
      isActive: true,
    },
    {
      id: "002",
      name: "Name",
      dptHead: "Dpt Head",
      noOfUsers: 20,
      isActive: true,
    },
    {
      id: "003",
      name: "Name",
      dptHead: "Dpt Head",
      noOfUsers: 20,
      isActive: true,
    },
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleUpload = () => {
    setIsUploadModalOpen(true);
  };

  const handleUploadSubmit = (data) => {
    // Handle the upload logic here
    console.log("Upload data:", data);
    // Add new application to the list
    const newApplication = {
      id: `00${applications.length + 1}`,
      name: data.jobRole,
      dptHead: "New Role",
      noOfUsers: 0,
      isActive: true,
    };
    setApplications([...applications, newApplication]);
    setIsUploadModalOpen(false);
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

  const filteredApplications = applications.filter(
    (app) =>
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
              <input
                type="text"
                placeholder="Search by Job Role"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
              />
              <div className="search-icon">
                <Search className="icon" />
              </div>
            </div>
            <button onClick={handleUpload} className="upload-btn">
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
                  <th className="table-th">Job Role</th>
                  <th className="table-th">Rank</th>
                  <th className="table-th">View Application</th>
                  <th className="table-th-last">Summary</th>
                </tr>
              </thead>

              <tbody className="table-body">
                
              </tbody>
            </table>
          </div>

          {/* Empty state */}
          {filteredApplications.length === 0 && (
            <div className="empty-state">
              <p className="empty-message">
                No applications found matching your search.
              </p>
            </div>
          )}

          {/* Upload Modal */}
          <UploadModal
            isOpen={isUploadModalOpen}
            onClose={() => setIsUploadModalOpen(false)}
            onUpload={handleUploadSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default Application;
