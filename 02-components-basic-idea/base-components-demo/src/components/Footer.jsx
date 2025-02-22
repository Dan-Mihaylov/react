import '../assets/css/Footer.css';

export default function Footer (props) {
  return (
    <>
    
    <footer>

      <p>React Components Exercise</p>
      <p>Passing of props...</p>
      <p>Footer section</p>
      <small>Date: {props.date}</small>

    </footer>
    
    </>
  ); 
}
