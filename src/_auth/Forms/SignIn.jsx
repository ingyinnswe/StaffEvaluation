import { useNavigate } from "react-router-dom";
import { useContext, useState} from "react";
import { UserIdContext } from '@/App';
import logo from '@/assets/ric-logo.png';
// import { isElementAccessExpression } from "typescript";

function signIn() {
  let navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const { userId, setUserId } = useContext(UserIdContext);
  const [loading, setLoading ] = useState(false);
  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
    const username = event.target.username.value;
    const response = await fetch(`${API_URL}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username }),
    });
    if(response.ok){
      const data = await response.json();
      setLoading(false);
      if (data.userId){
        setUserId(data.userId);
        navigate("/home");
      }
  } else{
    const data = await response.json();
    setLoading(false);
    alert(data.message);
  }
}

  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-36 w-auto logo"
          src={logo}
          alt="RIC logo"></img>
        <form
          onSubmit={handleSubmit}
          method="POST"
          className="flex flex-col justify-center m-10"
        >
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-light"
          >
            Staff ID
          </label>
          <input
            type="text"
            inputMode="numeric"
            name="username"
            placeholder="1234567"
            maxLength={7}
            required
            pattern="[0-9]{7}"
            onInput={(e) => {
                // Allow only numeric characters
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
              }}
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <button type="submit" className="flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled={loading}>
            {loading ? "Loading..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default signIn;
