import React from "react";
import { TextField } from "@mui/material";
import PasswordInput from "./PasswordInput";

const UserForm = () => {
  return (
    <div>
      <h2>Informações pessoais</h2>
      <div className="form-control">
        <TextField
          id="name"
          label="Nome"
          variant="outlined"
          required
        />
      </div>
      <div className="form-control">
        <TextField
          id="lastName"
          label="Sobrenome"
          variant="outlined"
          required
        />
      </div>
      <div className="form-control">
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          placeholder="ex:brian.rafael@gmail.com"
          required
        />
      </div>
      <div className="form-control">
        <TextField
          id="emailConfirm"
          label="Confirme o email"
          variant="outlined"
          required
        />
      </div>
      <div className="form-control">
        <PasswordInput/>
      </div>
    </div>
  );
};

export default UserForm;
