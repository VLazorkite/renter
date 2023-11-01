import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/server";
export default function Login() {
  return (
    <>
      <LoginLink>Sign in</LoginLink>
      <br />
      <RegisterLink>Sign up</RegisterLink>
    </>
  );
}
