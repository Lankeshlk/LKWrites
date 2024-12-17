import { IKImage } from "imagekitio-react";
import { useState } from "react"
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const Navbar = () => {
    const [open, setopen] = useState(false);
    return (
        <div className="w-full h-16  md:h-20 flex items-center justify-between ">

            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <IKImage urlEndpoint={import.meta.env.VITE_IK_URL_ENDPOINT}
                    src="https://ik.imagekit.io/q8uhlex8r/favicon.png"
                    className="w-16 h-16 rounded-full"
                    alt="" />
                <span>LKWrites</span>
            </Link>

            <div className="md:hidden ">

                <div className="cursor-pointer text-3xl"
                    onClick={() => setopen((prev) => !prev)}>
                    {open ? "X" : "\u2630"}
                </div>

                <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16  transition-all ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most popular</Link>
                    <Link to="/">About</Link>
                    <SignedOut>
                        <Link to="/login">
                            <button className="py-2 px-4 rounded-3xl bg-blue-400 text-white">Log in</button>
                        </Link>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

            </div>

            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most popular</Link>
                <Link to="/">About</Link>

                <SignedOut>
                    <Link to="/login">
                        <button className="py-2 px-4 rounded-3xl bg-blue-400 text-white">Log in</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
            
        </div>

    )
}

export default Navbar