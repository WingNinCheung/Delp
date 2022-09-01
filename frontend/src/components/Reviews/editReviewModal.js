import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditForm from "./editReviewForm";
import "../Navigation/Navigation.css";

function EditFormModal({ reviewId, businessId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="delete-review-button"
        id="edit-btn"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditForm
            reviewId={reviewId}
            businessId={businessId}
            setShowModal={setShowModal}
          />
        </Modal>
      )}
    </>
  );
}

export default EditFormModal;
