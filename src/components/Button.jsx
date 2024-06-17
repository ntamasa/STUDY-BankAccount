function Button({ children, handleClick }) {
  return <button onClick={handleClick}>{children.toUpperCase()}</button>;
}

export default Button;
