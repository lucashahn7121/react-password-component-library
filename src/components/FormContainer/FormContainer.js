import React, { useState } from 'react';
import { Button, FormGroup } from '@mui/material';
import PasswordInput from '../PasswordInput';
import { checkPasswordValues } from '../../utils/validator';
import ModalDialogue from '../ModalDialog';

const FormContainer = () => {

  const fieldInfo = ['first', 'confirm'];

  const formContainerStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "20px 30px",
    backgroundColor: "white",
    width: "400px",
  }
  const ulStyle = {
    userSelect: "none",
    paddingInlineStart: "14px",
  }

  const [pwd, setPwd] = useState({
    first: '',
    confirm: '',
  });
  const [formError, setFormError] = useState({
    first: '',
    confirm: '',
    isError: false,
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e, field) => {
    setFormError({
      first: '',
      second: '',
      isError: false,
    });
    setPwd({ ...pwd, [field]: e.target.value });
  }

  const handleSubmit = () => {
    const fError = checkPasswordValues(pwd);
    if (fError === null) {
      setShowModal(true);
    } else {
      setFormError(fError);
    }
  }

  return (
    <>
      <ModalDialogue
        open={showModal}
        setOpen={setShowModal}
        headerMsg={`Success!`}
        mainMsg={`Set password successful!`}
      />
      <FormGroup data-testid='form' style={formContainerStyle}>
        {fieldInfo.map((field) => (
          <PasswordInput
            value={pwd[field]}
            onChange={(e) => handleChange(e, field)}
            isError={formError.isError}
            errorMsg={formError[field]}
            key={field}
          />
        ))}

        <ul style={ulStyle}>
          <li><span>Password has a min length of 6 characters</span></li>
          <li><span>Password has at least 1 uppercase character</span></li>
          <li><span>Password has at least 1 lowercase character</span></li>
          <li><span>Password has at least 1 number</span></li>
          <li><span>Password has at least 1 special character</span></li>
        </ul>

        <Button variant='contained' onClick={handleSubmit}>submit</Button>
      </FormGroup>
    </>
  );
}

export default FormContainer;