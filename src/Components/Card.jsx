import React from 'react';
import { useRecoilValue } from 'recoil';
import { nameAtom, roleAtom, interestAtom1, interestAtom2, interestAtom3, linkedinAtom, githubAtom } from './Atoms';

export function Card() {
  const name = useRecoilValue(nameAtom);
  const role = useRecoilValue(roleAtom);
  const interest1 = useRecoilValue(interestAtom1);
  const interest2 = useRecoilValue(interestAtom2);
  const interest3 = useRecoilValue(interestAtom3);
  const linkedin = useRecoilValue(linkedinAtom);
  const github = useRecoilValue(githubAtom);

  return (
    <div style={styles.card}>
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.role}>{role}</p>
      <h3 style={styles.interestsHeader}>Interests</h3>
      <ul style={styles.interestsList}>
        <li style={styles.interestsItem}>{interest1}</li>
        <li style={styles.interestsItem}>{interest2}</li>
        <li style={styles.interestsItem}>{interest3}</li>
      </ul>
      <div style={styles.socialLinks}>
        <a style={styles.link} href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a style={styles.link} href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    margin: '20px',
    maxWidth: '400px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f8f9fa'
  },
  name: {
    marginTop: '5px',
    fontSize: '24px',
    marginBottom: '10px',
    color: '#333'
  },
  role: {
    fontSize: '16px',
    color: '#555',
    marginBottom: '15px',
  },
  interestsHeader: {
    fontSize: '18px',
    marginBottom: '10px',
    color: '#333'
  },
  interestsList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  interestsItem: {
    fontSize: '14px',
    marginBottom: '5px',
    color: '#555',
  },
  socialLinks: {
    display: 'flex',
    marginTop: '15px',
    gap: '10px'
  },
  link: {
    padding: '10px 15px',
    color: '#fff',
    textDecoration: 'none',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    display: 'inline-block',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  }
};
