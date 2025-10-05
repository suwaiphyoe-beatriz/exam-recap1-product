import useField from "../hooks/useField";
import useSignup from "../hooks/useSignup";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsAuthenticated }) => {
  const name = useField("text");
  const email = useField("email");
  const password = useField("password");
  const role = useField("text");
  const bio = useField("text");

  const { signup, error } = useSignup("/api/users/signup");
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await signup({
      name: name.value,
      email: email.value,
      password: password.value,
      role: role.value,
      bio: bio.value,
    });
    if (!error) {
      console.log("success");
      setIsAuthenticated(true);
      navigate("/");
    }
  };

  return (
    <div className="create">
      <h2>Sign Up</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input {...name} />
        <label>Email :</label>
        <input {...email} />
        <label>Password:</label>
        <input {...password} />
        <label>Role:</label>
        <input {...role} placeholder="Admin / Seller / Buyer" />
        <label>Bio:</label>
        <input {...bio} placeholder="Tell us about yourself" />
        <button>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;