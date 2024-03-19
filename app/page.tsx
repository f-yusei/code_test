export default function Home() {
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
      <div>
        <h2>グラフ</h2>
        <p>グラフが表示されます</p>
        <div>
          <button>総人口</button>
          <button>年少人口</button>
          <button>生産年齢人口</button>
          <button>老年人口</button>
        </div>
      </div>
    </main>
  );
}
