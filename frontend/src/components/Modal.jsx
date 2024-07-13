// implementing popups

import React from "react";
import Modal from "react-modal";

const CustomModal = ({ isOpen, onRequestClose, handleDeleteConfirmed }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        },
        content: {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "2rem",
          border: "none",
          backgroundColor: "#fff",
          color: "#512da8",
          borderRadius: "8px",
        },
      }}
    >
      <div
        className="modal-content"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Confirm Delete</h1>
        <p style={{ fontSize: "18px" }}>
          Are you sure you want to delete this post?
        </p>
        <div
          className="modal-actions"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
            paddingTop: "20px",
          }}
        >
          <button
            onClick={onRequestClose}
            style={{
              backgroundColor: "#512da8",
              color: "#fff",
              borderRadius: "4px",
              padding: "12px 20px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.35)",
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteConfirmed}
            style={{
              backgroundColor: "rgb(183, 14, 14)",
              color: "#fff",
              borderRadius: "4px",
              padding: "12px 20px",
              cursor: "pointer",
              border: "none",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.35)",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CustomModal;
