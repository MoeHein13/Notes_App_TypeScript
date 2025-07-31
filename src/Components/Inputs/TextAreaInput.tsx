import type { Props } from "./TextInput";

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-500">
        {label}
      </label>
      <textarea
        name={name}
        value={value}
        className="w-full rounded-lg border p-3 mt-2"
        onChange={onChange}
        required={required}
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
