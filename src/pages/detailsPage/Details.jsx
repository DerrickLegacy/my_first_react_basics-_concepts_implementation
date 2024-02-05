import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ResourceDetails from "../../components/resourceDetails/resourceDetailsModal/ResourceDetails";
import { CgDetailsMore } from "react-icons/cg";

export default function Details({
  resource_header,
  resource_author,
  resource_id,
  resource_image,
  description,
}) {
  const [showModal, setShowModal] = useState(false);
  function onHideClick() {
    setShowModal(false); // Set showModal to false to close the modal
  }

  return (
    <>
      <Button variant="info" onClick={() => setShowModal(true)}>
        Details <CgDetailsMore size={20} />
      </Button>
      <ResourceDetails
        description={description}
        resource_image={resource_image}
        resource_id={resource_id}
        resource_header={resource_header}
        shows={showModal}
        onHideClick={onHideClick}
        resource_author={resource_author}
      />
    </>
  );
}
