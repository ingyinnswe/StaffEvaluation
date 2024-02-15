import { useNavigate } from 'react-router-dom';

function signIn() {
    let navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your sign in logic here
        // After sign in logic, navigate to home page
        navigate('/');
    }

    return (
        <div className='flex justify-center items-center h-screen'>
            <form onSubmit={handleSubmit} className='flex flex-col justify-center m-10'>
                <label>
                Username:
                <input type="text" name="username" className=""/>
                </label>
                <button type="submit" className='bg-black text-white'>Sign In</button>
            </form>
        </div>
    );
    }

export default signIn;