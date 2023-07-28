import Head from "next/head";
import { useSession } from "next-auth/react";
import Link from "next/link";
import auth from "@/firebase/firebase.auth";
import { useAuthState } from "react-firebase-hooks/auth";
const HomePage = () => {
  const { data: session } = useSession();
  const [user, loading, error] = useAuthState(auth);
  console.log("user", user?.email);
  return (
    <div>
      <Head>
        <title>Next Auth</title>
      </Head>
      <h1 style={{ textAlign: "center", marginTop: "10%" }}>
        Welcome To Next Auth Home Page
      </h1>

      {session?.user?.email ? (
        <>
          <h2 style={{ textAlign: "center" }}>
            Login User Name: {session?.user?.name}
          </h2>
          <h3 style={{ textAlign: "center" }}>
            Login User Email: {session?.user?.email}
          </h3>
        </>
      ) : (
        <></>
      )}
      {user?.email ? (
        <>
          <h3 style={{ textAlign: "center" }}>
            Login User Email: {user?.email}
          </h3>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
