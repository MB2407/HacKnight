import { useState } from 'react';
import PropTypes from 'prop-types';
import { FaRotate, FaMeteor } from 'react-icons/fa6';
import Loader from '../components/Loader';
import { v4 as uuid } from 'uuid';
import ParticipantService from '../services/ParticipantService';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [github, setGitHub] = useState('');

  const handleFullName = e => setFullName(e.target.value);
  const handleEmail = e => setEmail(e.target.value);
  const handleCountry = e => setCountry(e.target.value);
  const handleGitHub = e => setGitHub(e.target.value);
  const [loader, setLoader] = useState(false); // [false, function
 
  const newParticipant = {
    id: uuid(),
    fullName: fullName,
    email: email,
    country: country,
    github: github,
  };

 
  const Navigate = useNavigate();
  const handleSubmit = async (e) => {

    try {
      e.preventDefault();
      setLoader(true);
      if (fullName === '' || email === '' || country === '' || github === '') {
        window.alert('Please fill the form');
        return;
      }
    await ParticipantService.register(newParticipant);
    Navigate('/participants');
    }catch (error) {
      window.alert(`Error Occurred: ${error.message}`);
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {false && <Loader />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Country"
            value={country}
            onChange={handleCountry}
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="GitHub"
            value={github}
            onChange={handleGitHub}
          />
        </div>
        <button className="btn btn-danger me-2" type="submit">
          <FaMeteor /> Register
        </button>
        <button className="btn btn-dark" type="submit">
          <FaRotate /> Reset
        </button>
      </form>
    </>
  );
};

export default Register;

Register.propTypes = {
  add: PropTypes.func,
  loader: PropTypes.func,
};
