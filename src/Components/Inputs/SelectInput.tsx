import type { Props } from "./TextInput";

type SelectProps = {
  options: { value: string; label: string }[];
} & Omit<Props, "required">;

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
}: SelectProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="font-semibold text-gray-500 block">
        {label}
      </label>
      <select
        name={name}
        value={value}
        className="w-full rounded-lg border p-3 mt-2"
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
