import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom';
import './App.css';

const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration data:', formData);
        navigate("/search")
      };
    
      return (
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
              Email:
              <input type="email" name="email" value={formData.email} onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formData.password} onChange={handleChange} />
            </label>
            <button type="submit">Register</button>
          </form>
          <p>
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </div>
      );
}

export default Register
