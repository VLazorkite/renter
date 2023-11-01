"use client";
import { UserContext, useUser } from "@auth0/nextjs-auth0/client";

export default function Dashboard() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  user && (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div>
      <img src={user.picture} alt={user.name} />
      <h2>{user.nickname}</h2>
      <p>{user.email}</p>
    </div>
  );
}
