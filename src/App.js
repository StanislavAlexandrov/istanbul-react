import logo from './logo.svg';
import './App.css';
import myFunction from './functions/istanbul-roller';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button className="istanbul-button" onClick={myFunction}>
                    Roll it
                </button>
                <div id="result">Result</div>
                <img
                    id="tile-picture"
                    src=""
                    alt="istanbul"
                    onClick={myFunction}
                />
            </header>
        </div>
    );
}

export default App;
