import { useNavigate } from "react-router-dom";

function signIn() {
    
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign in logic here
    // After sign in logic, navigate to home page
    navigate("/home");
  };

  return (
    <div className="flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-36 w-auto logo"
          src="./src/assets/ric-logo.png"
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
            name="username"
            placeholder="12345678"
            required
            className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

          <button type="submit" className="flex justify-center w-full mt-5 rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default signIn;
