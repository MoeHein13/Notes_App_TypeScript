import React, { useState } from "react";
import TextInput from "./Inputs/TextInput";
import SelectInput from "./Inputs/SelectInput";
import TextAreaInput from "./Inputs/TextAreaInput";

export type formDataType = {
  id?: number;
  title: string;
  priority: string;
  category: string;
  description: string;
};

type props = {
  notes: formDataType[];

  setNote: React.Dispatch<React.SetStateAction<formDataType[]>>;
};

const NoteForm = ({ notes, setNote }: props) => {
  const [expand, setExpand] = useState<boolean>(false);

  const handleClick = () => {
    setExpand((prev) => !prev);
  };

  const [formData, setFormData] = useState<formDataType>({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const newNotes = { id: Date.now(), ...formData };

    setNote([newNotes, ...notes]);

    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  };

  return (
    <>
      <button
        className="border-gray-600 bg-gray-100 w-full rounded-lg py-3 mb-4 font-bold  cursor-pointer hover:bg-blue-300 transition"
        onClick={handleClick}
      >
        {expand ? "Hide Form ❌" : "Expand Form ➕"}
      </button>
      {expand && (
        <form onSubmit={handleSubmit} className="mb-4">
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "High 🔴 " },
              { value: "Medium", label: "Medium 🔵" },
              { value: "Low", label: "Low 🟢" },
            ]}
          />

          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: " 🏢Work" },
              { value: "Personal", label: " 💻Personal" },
              { value: "Ideas", label: " 💡Ideas" },
            ]}
          />

          <TextAreaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <button className="w-full border rounded-lg bg-purple-200 py-3 font-bold text-xl text-gray-700 cursor-pointer hover:bg-purple-300">
            Add Note
          </button>
        </form>
      )}
    </>
  );
};

export default NoteForm;
