import Checkbox from "@/components/checkbox/Checkbox";
import { ChangeEvent, useState } from "react";

type Prefecture = {
  prefCode: number;
  prefName: string;
};

const PrefecturesCheckboxes = async () => {
  const prefectures: Prefecture[] = await fetch("/api/prefectures").then(
    (res) => res.json(),
  );
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div>
      {prefectures.map((prefecture) => (
        <Checkbox
          key={prefecture.prefCode}
          label={prefecture.prefName}
          name={prefecture.prefName}
          value={prefecture.prefCode}
          onChange={handleCheckboxChange}
        />
      ))}
    </div>
  );
};
