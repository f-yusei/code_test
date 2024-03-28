import React, { ChangeEvent } from "react";
import styles from "./Checkbox.module.css";

type CheckboxProps = {
  label: string;
  name: string;
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={styles.checkbox}>
      <label>
        <input type="checkbox" name={name} value={value} onChange={onChange} />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
