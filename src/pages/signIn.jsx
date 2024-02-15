import { useHistory } from 'react-router-dom';

function signIn() {
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your sign in logic here
    // After sign in logic, navigate to home page
    history.push('/home');
  }

  return (
    <div>
      <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
            <label>
            Username:
            <input type="text" name="username" />
            </label>
            <button type="submit">Sign In</button>
        </form>
    </div>
  );
}

export default signIn;