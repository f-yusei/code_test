import React from "react";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label: string;
  name: string;
  value: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  value,
  checked,
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
          checked={checked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
