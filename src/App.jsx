import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  // Fungsi untuk menambah angka
  const handleTambah = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  // Fungsi untuk mengurangi angka
  const handleKurang = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <div className="mx-5 my-5 p-3 d-flex justify-content flex-column gap-3">
        <h2 className="text-center">{count}</h2>
        <div className="d-flex justify-content-center align-content gap-3">
          <button className="btn btn-primary mx-2" onClick={handleTambah}>
            Tambah
          </button>
          <button className="btn btn-danger mx-2" onClick={handleKurang}>
            Kurang
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
