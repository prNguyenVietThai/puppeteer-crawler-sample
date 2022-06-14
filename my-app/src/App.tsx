import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <h1>こちらはクロールしたい記事リストです。</h1>
        <ul>
          <li><a className="App-link" href="#news1">1番目の記事</a></li>
          <li><a className="App-link" href="#news2">2番目の記事</a></li>
          <li><a className="App-link" href="#news3">3番目の記事</a></li>
          <li><a className="App-link" href="#news4">4番目の記事</a></li>
        </ul>
      </div>
    </div>
  );
}

export default App;
