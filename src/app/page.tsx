import Login from "@/components/Login";
import Logout from "@/components/Logout";
import Link from "next/link";
import ProfileClient from "./profile-client/page";

export default function Home() {
  return (
    <>
      <Login />
      <br />
      <Logout />
      <ProfileClient />
      <Link href="/tenant">Tenant</Link>
    </>
  );
}
