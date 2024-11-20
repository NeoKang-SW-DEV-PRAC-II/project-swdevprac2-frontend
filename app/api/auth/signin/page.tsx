import { getServerSession } from "next-auth";
import SignInForm from "./form";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

// TODO: style components
export default async function SignInPage() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <SignInForm csrfToken={""} />
    </div>
  );
}