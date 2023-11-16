import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './App.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login data:', formData);
        navigate("/search")
      };
    
      return (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button type="submit">Login</button>
          </form>
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      );
}

export default Login
