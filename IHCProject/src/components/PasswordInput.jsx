import React from "react";
import { TextField, LinearProgress } from "@mui/material";

function PasswordInput({ value, onChange }) {
  const passwordStrength = calculatePasswordStrength(value);
  return (
    <>
      <TextField
        type="password"
        label="Senha"
        value={value}
        onChange={onChange}
        required
      />
      <LinearProgress variant="determinate" value={passwordStrength} />
    </>
  );
}

function calculatePasswordStrength(password) {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  if (!regex.test(password)) {
    return 0;
  }

  const passwordLength = password.length;
  const complexity = calculatePasswordComplexity(password);

  return Math.min(
    Math.round((passwordLength / 16 + complexity / 4) * 100),
    100
  );
}

function calculatePasswordComplexity(password) {
  const regex = /[!@#$%^&*]/g;
  const matches = password.match(regex);

  if (!matches) {
    return 0;
  }

  return matches.length;
}

export default PasswordInput;
