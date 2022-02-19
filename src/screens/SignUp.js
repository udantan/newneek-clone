import { Checkbox, FormControlLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import CheckBoxWithLabel from "../components/CheckBoxWithLabel";
import WrapLayout from "../components/WrapLayout";
import { login } from "../redux/userReducer";
import colors from "../utils/colors";
import { LoginButton, LoginHead, LoginInput } from "./Login";

export default function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, setValue, watch, handleSubmit, formState, setError } = useForm({ mode: "onSubmit" });
  const [isValid, setIsValid] = useState(false);
  const onValid = (data) => {
    if (data.password !== data.passwordConfirm) {
      setError("passwordConfirm", { message: "비밀번호가 달라요" });
    } else {
      dispatch(
        login({
          nickname: "test",
          birthday: "1996/10/27",
          emoji: "🦔",
          sex: "male",
        })
      );
      navigate("/");
    }
  };
  useEffect(() => {
    watch("checkbox1") && watch("checkbox2") && watch("checkbox3") ? setIsValid(true) : setIsValid(false);
  }, [watch("checkbox1"), watch("checkbox2"), watch("checkbox3")]);

  return (
    <form>
      <WrapLayout>
        <LoginHead navigate={navigate}>
          <img alt={"logo"} src={"/images/logo.png"} width={240} />
        </LoginHead>
        <LoginInput
          {...register("email", {
            required: { value: true, message: "이메일 주소를 입력해주세요" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "옳바른 이메일을 입력해주세요",
            },
          })}
          placeholder="이메일"
        />
        {formState?.errors?.email && (
          <div style={{ position: "relative", height: "16px" }}>
            <ErrorMsg>{formState?.errors?.email?.message}</ErrorMsg>
          </div>
        )}
        <LoginInput
          {...register("password", {
            required: { value: true, message: "비밀번호를 입력해주세요" },
            minLength: { value: 8, message: "비밀번호를 8자 이상 가능해요" },
          })}
          placeholder="비밀번호 (8자 이상)"
        />
        {formState?.errors?.password && (
          <div style={{ position: "relative", height: "16px" }}>
            <ErrorMsg>{formState?.errors?.password?.message}</ErrorMsg>
          </div>
        )}
        <LoginInput
          {...register("passwordConfirm", { required: { value: true, message: "비밀번호를 입력해주세요" } })}
          placeholder="비밀번호 확인 (8자 이상)"
        />
        {formState?.errors?.passwordConfirm && (
          <div style={{ position: "relative", height: "16px" }}>
            <ErrorMsg>{formState?.errors?.passwordConfirm?.message}</ErrorMsg>
          </div>
        )}
        <LoginInput
          {...register("nickname", {
            required: { value: true, message: "이름을 입력해주세요" },
            minLength: { value: 2, message: "이름은 2글자 이상만 가능해요" },
          })}
          placeholder="닉네임"
        />
        {formState?.errors?.nickname && (
          <div style={{ position: "relative", height: "16px" }}>
            <ErrorMsg>{formState?.errors?.nickname?.message}</ErrorMsg>
          </div>
        )}
        <FormControlLabel
          control={
            <Checkbox
              onChange={(e) => {
                setValue("checkbox1", e.target.checked);
                setValue("checkbox2", e.target.checked);
                setValue("checkbox3", e.target.checked);
                setValue("checkbox4", e.target.checked);
              }}
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
          label={<LabelText>모두 동의합니다</LabelText>}
        />
        <CheckBoxWithLabel
          id="checkbox1"
          register={register}
          checked={watch("checkbox1") === undefined ? false : watch("checkbox1")}
          text="만 14세 이상 가입 동의 (필수)"
        />

        <CheckBoxWithLabel
          id="checkbox2"
          register={register}
          checked={watch("checkbox2") === undefined ? false : watch("checkbox2")}
          text="이용약관 동의 (필수)"
        />
        <CheckBoxWithLabel
          id="checkbox3"
          register={register}
          checked={watch("checkbox3") === undefined ? false : watch("checkbox3")}
          text="개인정보 수집/이용 동의 (필수)"
        />
        <CheckBoxWithLabel
          required={false}
          id="checkbox4"
          register={register}
          checked={watch("checkbox4") === undefined ? false : watch("checkbox4")}
          text="뉴스레터 및 이벤트 정보 수신 동의 (선택)"
        />

        <LoginButton disabled={!isValid} onClick={handleSubmit(onValid)} style={{ marginTop: 32 }} dark>
          가입하기
        </LoginButton>
      </WrapLayout>
    </form>
  );
}
const ErrorMsg = styled.h1`
  position: absolute;
  top: -10px;
  font-size: 14px;
  font-family: "BM-Air";
  color: ${colors.red};
`;
const LabelText = styled.h1`
  font-size: 14px;
  font-family: "BM-Air";
`;
