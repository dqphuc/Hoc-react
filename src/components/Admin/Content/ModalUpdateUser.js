//import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { putUpdateUser } from "../../../services/apiService";
import _ from 'lodash';

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUpdate } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setRole("USER");
    setImage("");
    setPreviewImage("");
    props.resetUpdateData();
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewimage, setPreviewImage] = useState("");


  useEffect(()=>{
    console.log('run usereffect:', dataUpdate)
    if(!_.isEmpty(dataUpdate)) {
        setEmail(dataUpdate.email);
        //setPassword(dataUpdate.password);
        setUsername(dataUpdate.username);
        setRole(dataUpdate.role);
        setImage('');
        if (dataUpdate.image){
            setPreviewImage(`data:image/jpeg;base64,${dataUpdate.image}`);
        }
       
    }

  }, [dataUpdate]);

  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    } else {
      }
  };

  const handleSubmitCreateUser = async () => {
   
    let data = await putUpdateUser(dataUpdate.id, username, role, image);
      if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
       //await props.fetchListUsers()
      //props.setCurrentPage(1);
      await props.fetchListUsersWithPaginate(props.currentPage);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled={true} //khong cho sua email
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled={true} //khong cho sua password
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option value="USER">USER</option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <div className="col-md-12">
              <label className="form-label lable-upload" htmlFor="lableUpload">
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                id="lableUpload"
                hidden
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col-md-12 img-preview">
              {previewimage ? (
                <img src={previewimage} />
              ) : (
                <span>Preview Image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitCreateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalUpdateUser;
