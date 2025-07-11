import {
  NavigationMenu,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div>
      <div className="navbar shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavigationMenu>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/books">All Books</Link>
                  </NavigationMenuLink>
                </NavigationMenu>
              </li>
              <li>
                <NavigationMenu>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/borrow-summary">Book Summary</Link>
                  </NavigationMenuLink>
                </NavigationMenu>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">Library</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavigationMenu>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/books">All Books</Link>
              </NavigationMenuLink>
            </NavigationMenu>
            <NavigationMenu>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link to="/borrow-summary">Borrow Summary</Link>
              </NavigationMenuLink>
            </NavigationMenu>
          </ul>
        </div>
        <div className="navbar-end space-x-5">
          <ModeToggle></ModeToggle>
          <Link className="btn" to={'/create-book'}>Add Book</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
