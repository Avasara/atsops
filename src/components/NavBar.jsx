import { SignInButton, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";

export default function NavBar() {
  return (
    <>
      <nav className="bg-gray-50 border-b border-gray-200 flex px-3 md:px-20 py-5 shadow">
        <h1 className="text-2xl font-bold">ATSOPS</h1>

        <div className="flex gap-8 ml-auto font-bold items-center">
          <SignedIn>
            <a href="/dashboard">Dashboard</a>
          </SignedIn>

          <SignedOut>
            <SignInButton
              mode="modal"
              className="bg-blue-600 px-4 py-1 text-white rounded"
            />
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}
