import{BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import MovieList from "./Components/MovieList/MovieList";
import MovieDetail from "./Pages/MovieDetail/MovieDetail"

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
          <Routes>
           <Route index element={<Home/>}/>
           <Route path="movie/:id" element={<MovieDetail/>} />
           <Route path="movies/:type" element={<MovieList/>} />
           <Route path="/*" element={<h1>error page</h1>} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
