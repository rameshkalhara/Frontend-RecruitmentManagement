import React, { useState, useRef, useEffect } from "react";
import "./uploadApplication.css";
import { X, Upload as UploadIcon, ChevronDown } from "lucide-react";

const UploadModal = ({ isOpen, onClose, onUpload }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [file, setFile] = useState(null);
  const dropdownRef = useRef(null);

  const jobOptions = [
    "Software Engineer",
    "UI / UX",
    "Quality Assurance",
    "AI / ML",
    "HR",
    "Cyber Security",
    "Cloud",
    "IT Support",
    "Finance"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpload({ jobRole: selectedJob, file });
    onClose();
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

    // Add reset function
  const resetForm = () => {
    setSelectedJob("");
    setFile(null);
    setIsDropdownOpen(false);
  };

  // Modify close handler
  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={handleClose}>
          <X size={24} />
        </button>

        <h2 className="modal-title">Upload Applications</h2>

        <form onSubmit={handleSubmit}>
          <div className="custom-dropdown" ref={dropdownRef}>
            <div 
              className="dropdown-header" 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span>{selectedJob || "Job Role"}</span>
              <ChevronDown className={`dropdown-icon ${isDropdownOpen ? 'open' : ''}`} />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-list">
                {jobOptions.map((job) => (
                  <div
                    key={job}
                    className={`dropdown-item ${selectedJob === job ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedJob(job);
                      setIsDropdownOpen(false);
                    }}
                  >
                    {job}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div
            className="upload-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <UploadIcon size={48} className="upload-icon" />
            <p>Drag and drop your file here or</p>
            <input
              type="file"
              id="file-upload"
              className="file-input"
              onChange={(e) => setFile(e.target.files[0])}
              accept=".pdf,.doc,.docx"
            />
            <label htmlFor="file-upload" className="file-label">
              Browse Files
            </label>
            {file && <p className="file-name">{file.name}</p>}
          </div>

          <div className="modal-actions">
            <button type="button" className="cancel-btn" onClick={handleClose}>
              Cancel
            </button>
            <button 
              type="submit" 
              className="upload-submit-btn"
              disabled={!selectedJob || !file}
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadModal;