const Button = ({ className, children, ...props }) => {
  return (
    <>
      <button
        {...props}
        className={`${className} bg-black hover:opacity-95 text-white active:opacity-100 active:outline active:outline-2 active:outline-gray-700`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
