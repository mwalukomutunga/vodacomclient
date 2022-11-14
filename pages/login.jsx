import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import requests from "../agent";
import { useRouter } from "next/router";
import { addUser } from "../context/user.slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const isProd = process.env.NODE_ENV === "production";

export default function Login() {
  const notify = () =>
    toast("Invalid credentials. Try again!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const [input, setInputs] = useState({
    username: isProd ? "" : "Admin",
    password:  isProd ? "" : "Shalom123.#"
  });
  const dispatch = useDispatch();
  const router = useRouter();
  useEffect(() => {}, []);

  const handleInputChange = (event) => {
    event.persist();
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    requests.post("api/token", input).then((res) => {
      if (res) {
        if (!res?.reset) {
          dispatch(addUser(res));
          router.push("/sales");
        } else {
          dispatch(addUser(res));
          router.push("/authrecovery");
        }
      } else {
        router.push("login");      
        notify();
      }
    });
  };
  return (
    <>
      <h4 className="mt-0">Sign In</h4>
      <p className="text-muted mb-4">
        Enter your mobile phone and password to access farmer portal.
      </p>

      <form onSubmit={(e) => handleLogin(e)}>
        <div className="mb-2">
          <label  className="form-label">
            Phone number
          </label>
          <input
            className="form-control"
            type="tel"
            defaultValue={input.username}
            id="phone"
            required
            name="username"
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="mb-2">
          
          <label className="form-label">
            Password
          </label>
          <div className="input-group input-group-merge">
            {/* <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
            /> */}
            <input
              required
              defaultValue={input.password}
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInputChange}
            />
            {/* <div className="input-group-text" data-password="false">
              <span className="password-eye"></span>
            </div> */}
          </div>
        </div>

        <Link href="authrecovery">
            <a className="text-muted float-end">
              <small>Forgot your password?</small>
            </a>
          </Link>
        <div className="d-grid text-center">
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
        </div>
      </form>     

      {/* <p className="pt-3 text-center">Need to Signup?</p><Link href='register'><a className="btn btn-block btn-secondary">Register Now</a></Link> */}
    </>
  );
}
