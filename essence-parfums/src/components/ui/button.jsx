export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`transition duration-300 font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}