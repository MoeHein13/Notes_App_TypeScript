export type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  required: boolean;
};

const TextInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: Props) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-500 block">
        {label}
      </label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border p-3 mt-2"
        required={required}
      />
    </div>
  );
};

export default TextInput;
