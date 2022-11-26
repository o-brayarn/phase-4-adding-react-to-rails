import './App.css';
import { useEffect } from 'react';

function App() {
  // const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch("/movies")
      .then(res => res.json())
      .then(movies => console.log(movies));
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
