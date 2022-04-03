import { NextPage } from "next";
import Link from 'next/link';
import NavLink from "./NavLink";
import { useAppSelector, useAppDispatch } from "@redux-store/hooks";


export default function Header() {
    const { authToken, isLoggedIn } = useAppSelector((state) => state.user);

    return <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light no-flow">
            <div className="container">
                <a class="navbar-brand" href="#">Hands Up</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 nav ms-auto no-flow">
                        <li className="nav-item">
                            <NavLink href="/joblist" className=" nav-link " >Job List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink href="/profile" className="nav-link ">Profile</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink href="/employer/create-jobs" className="nav-link ">Create Jobs</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink href="/employer/my-posts" className="nav-link ">My Job Posts</NavLink>
                        </li>


                        <li className="nav-item">
                            <NavLink href="/applications" className="nav-link ">Applications</NavLink>
                        </li>
                        {isLoggedIn &&
                            <li className="nav-item">
                                <NavLink className="nav-link " href={"#"} >Logout</NavLink>
                            </li>

                        }

                        {!isLoggedIn &&
                            <li className="nav-item">
                                <NavLink className="nav-link " href="/login" >Login</NavLink>
                            </li>

                        }
                    </ul>
                </div>
            </div>
        </nav>
    </>;
};
