import { SignedOut, SignOutButton, SignInButton, SignedIn } from '@clerk/clerk-react';
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";
import SignInAuthButtons from './SignInAuthButtons';

const TopBar = () => {
  const isAdmin = false;

  return (
    <div className="flex items-center justify-items-center p-4 sticky top-0 bg-zinc-900/75 backdrop-blur-md z-10">
      <div className="flex gap-2 items-center">
        Music
      </div>
      <div className="flex items-center gap-4">
        {isAdmin && (
          <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2" />
          </Link>
        )}
      </div>
      <SignedIn>
        <SignOutButton />
      </SignedIn>
      <SignedOut>
        <SignInAuthButtons />
      </SignedOut>
    </div>
  )
}

export default TopBar