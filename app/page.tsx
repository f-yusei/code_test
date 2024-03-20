"use client";
import Button from "../components/button/Button";
import { RenderLineChart } from "../components/chart/PopulationChart";
import Checkbox from "../components/checkbox/Checkbox";

export default function Home() {
  const chartData = [
    { year: "1980", value: 12817 },
    { year: "1985", value: 12817 },
    { year: "1990", value: 12817 },
    { year: "1995", value: 12817 },
    { year: "2000", value: 12817 },
  ];

  const handleButtonClick = () => {};
  return (
    <main>
      <h2>Title</h2>
      <p>都道府県を選択してください</p>
      <form>
        <Checkbox label="東京" name="tokyo" value="tokyo" onChange={() => {}} />
        <Checkbox label="大阪" name="osaka" value="osaka" onChange={() => {}} />
        <Checkbox
          label="福岡"
          name="fukuoka"
          value="fukuoka"
          onChange={() => {}}
        />
      </form>
      <h3>グラフ</h3>
      <RenderLineChart data={chartData} />
      <div>
        <Button onClick={handleButtonClick}>総人口</Button>
        <Button onClick={handleButtonClick}>年少人口</Button>
        <Button onClick={handleButtonClick}>生産年齢人口</Button>
        <Button onClick={handleButtonClick}>老年人口</Button>
      </div>
    </main>
  );
}
