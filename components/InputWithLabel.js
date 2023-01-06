export default function InputWithLabel({ children, type = "text", ...props }) {
  return (
    <div className="form-group grid w-full">
      <label className="text-gray-600" htmlFor={props.id}>
        {children}
      </label>
      <input
        type={type}
        // placeholder="johndoe@gmail.com"
        // id="email"
        {...props}
        className="border-b-2 py-3 focus:border-primary text-primary focus:outline-none w-full"
      />
    </div>
  );
}
