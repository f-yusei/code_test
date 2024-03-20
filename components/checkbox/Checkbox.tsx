import React from "react";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label: string;
  name: string;
  value: string;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };

  return (
    <div className={styles.checkbox}>
      <label>
        <input
          type="checkbox"
          name={name}
          value={value}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
