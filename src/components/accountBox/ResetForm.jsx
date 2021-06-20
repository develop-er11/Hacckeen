import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import { LoginForm } from "./loginForm";

export function ResetForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit"> Reset</SubmitButton>
      <Marginer direction="vertical" margin="1em" />

      <BoldLink href="#" onClick={switchToSignin}>
        Signin
      </BoldLink>
    </BoxContainer>
  );
}
