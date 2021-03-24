// import logo from './logo.svg';
import './App.css';
import myFunction from './functions/istanbul-roller';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <button className="istanbul-button" onClick={myFunction}>
                    Roll it
                </button>
                <div className="istanbul-result">Result</div>
                <img
                    className="istanbulTilePicture"
                    src={require('./img/Istanbul_board_game_cover.jpg').default}
                    alt="istanbul"
                    onClick={myFunction}
                />
            </header>
        </div>
    );
}

export default App;
