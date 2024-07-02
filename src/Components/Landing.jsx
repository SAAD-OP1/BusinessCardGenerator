import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { nameAtom, roleAtom, interestAtom1, interestAtom2, interestAtom3, linkedinAtom, githubAtom } from './Atoms';

export function Landing() {
  const [name, setName] = useRecoilState(nameAtom);
  const [role, setRole] = useRecoilState(roleAtom);
  const [interest1, setInterest1] = useRecoilState(interestAtom1);
  const [interest2, setInterest2] = useRecoilState(interestAtom2);
  const [interest3, setInterest3] = useRecoilState(interestAtom3);
  const [linkedin, setLinkedin] = useRecoilState(linkedinAtom);
  const [github, setGithub] = useRecoilState(githubAtom);
  const navigate = useNavigate();

  function checkDetails() {
    if (name === "" || role === "" || interest1 === "" || interest2 === "" || interest3 === "" || linkedin === "" || github === "") {
      return alert('Please fill all the details');
    }
    navigate("/Card");
  }

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Enter your name</h3>
      <input style={styles.input} placeholder="Name" type="text" onChange={(e) => setName(e.target.value)} />

      <h3 style={styles.heading}>Enter your role/position</h3>
      <input style={styles.input} placeholder="Role" type="text" onChange={(e) => setRole(e.target.value)} />

      <h3 style={styles.heading}>Enter any 3 of your interests</h3>
      <input style={styles.input} placeholder="Interest - 1" type="text" onChange={(e) => setInterest1(e.target.value)} />
      <input style={styles.input} placeholder="Interest - 2" type="text" onChange={(e) => setInterest2(e.target.value)} />
      <input style={styles.input} placeholder="Interest - 3" type="text" onChange={(e) => setInterest3(e.target.value)} />

      <h3 style={styles.heading}>Enter your Linkedin profile link</h3>
      <input style={styles.input} placeholder="Your Linkedin profile link" type="text" onChange={(e) => setLinkedin(e.target.value)} />

      <h3 style={styles.heading}>Enter your Github profile link</h3>
      <input style={styles.input} placeholder="Your Github profile link" type="text" onChange={(e) => setGithub(e.target.value)} />

      <button style={styles.button} onClick={checkDetails}>Get Card</button>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  },
  heading: {
    margin: '10px 0',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxSizing: 'border-box'
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px'
  }
};
