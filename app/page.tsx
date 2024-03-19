"use client";
import Button from "./components/button/Button";
import { RenderLineChart } from "./components/chart/PopulationChart";

export default function Home() {
  const chartData = [
    { year: "1980", value: 12817 },
    { year: "1985", value: 12817 },
    { year: "1990", value: 12817 },
    { year: "1995", value: 12817 },
    { year: "2000", value: 12817 },
  ];

  const handleButtonClick = () => {
    console.log("button clicked");
  };
  return (
    <main>
      <h2>Title</h2>
      <p>都道府県を選択してください</p>
      <form>
        <label>
          <input type="checkbox" name="tokyo" value="tokyo" />
          東京
        </label>
        <label>
          <input type="checkbox" name="kanagawa" value="kanagawa" />
          神奈川
        </label>
        <label>
          <input type="checkbox" name="saitama" value="saitama" />
          埼玉
        </label>
        <label>
          <input type="checkbox" name="chiba" value="chiba" />
          千葉
        </label>
        <label>
          <input type="checkbox" name="ibaraki" value="ibaraki" />
          茨城
        </label>
        <label>
          <input type="checkbox" name="tochigi" value="tochigi" />
          栃木
        </label>
        <label>
          <input type="checkbox" name="gunma" value="gunma" />
          群馬
        </label>
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
