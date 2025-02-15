import { useSession, signIn, signOut } from "next-auth/react"

const LogInBtn = ({}) => {
    const { data: session } = useSession();

    return session ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn()}>Sign In</button>
      );
}

export default LogInBtn;