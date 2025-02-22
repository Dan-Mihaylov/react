import '../assets/css/Header.css';

export default function Header (props) {
  return (
    // <> </> --> This puts all the elements in between in a Fragment, which means, it does not wrap them in another element, but display them as is
    // in their specified order.
    <>
      <nav className="navigation">
        <ul>
          {props.elements.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </nav>
    </>
  )
}
