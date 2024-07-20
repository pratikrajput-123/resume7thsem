import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>© 2024 Resume Builder. All rights reserved.</p>
        <p style={styles.contact}>Contact Us: pratik26rajput2003@gmail.com | 722037067</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  text: {
    fontSize: '14px',
    marginBottom: '10px',
  },
  contact: {
    fontSize: '14px',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    marginLeft: '5px',
  },
};

export default Footer;
