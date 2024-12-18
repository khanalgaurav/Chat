import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { FiLogOut, FiSettings, FiUser } from "react-icons/fi";

type Props = {};

const Navbar = (props: Props) => {
  const { logout, authUser } = useAuthStore();
  return (
    <div className=" shadow-sm shadow-gray-700">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to={"/"} className="text-lg md:text-xl">
            Fiscord | Just Messages
          </Link>
        </div>
        <div className="text-3xl gap-5 hidden md:flex">
          <Link to={"/settings"} className="btn">
            <FiSettings />
            Settings
          </Link>
          {authUser && (
            <>
              <Link to={"/profile"} className="btn">
                <FiUser />
                Profile
              </Link>
              <button onClick={logout} className="btn">
                <FiLogOut />
                Logout
              </button>
            </>
          )}
        </div>
        <div className="flex text-3xl gap-5 md:hidden">
          <Link to={"/settings"} className="text-xl">
            <FiSettings />
          </Link>
          {authUser && (
            <>
              <Link to={"/profile"} className="text-xl">
                <FiUser />
              </Link>
              <button onClick={logout} className="text-xl">
                <FiLogOut />
              </button>
            </>
          )}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
