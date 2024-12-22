import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// or less ideally
import { Card } from "react-bootstrap";

function ModalKu(
  judulStat = true,
  judul = <p>Modal</p>,
  body = <p>Modal body text goes here.</p>,
  footer = true
) {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        {judulStat && (
          <Modal.Header closeButton>
            <Modal.Title>{judul}</Modal.Title>
          </Modal.Header>
        )}

        <Modal.Body>{body}</Modal.Body>

        {footer && (
          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Button variant="primary">Save changes</Button>
          </Modal.Footer>
        )}
      </Modal.Dialog>
    </div>
  );
}

export default ModalKu;
