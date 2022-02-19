import { Checkbox, FormControlLabel } from "@mui/material";
import React from "react";
import styled from "styled-components";

export default function CheckBoxWithLabel({ checked, text, register, id, required = true }) {
  return (
    <FormControlLabel
      {...register(id, { required: required })}
      control={
        <Checkbox
          checked={checked}
          sx={{
            height: "24px",
            marginBottom: "5px",
            color: "black",
            "&.Mui-checked": {
              color: "black",
            },
          }}
        />
      }
      label={<LabelText>{text}</LabelText>}
    />
  );
}
const LabelText = styled.h1`
  font-size: 14px;
  font-family: "BM-Air";
`;
