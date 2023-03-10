import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
    const [url, setUrl] = useState("");
    const [shortenedUrl, setShortenedUrl] = useState("");

    function handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        
        axios.post('https://shortenurl.up.rail.app/shorten', {"url": url})
        .then(res => {
            console.log(res);
            console.log(res.data);
            setShortenedUrl(res.data);
        })
    }

    return (
        <div className="App">
            <header className="App-header">
                <text>
                    Please input url to be shortened.
                </text>
                <text>
                    Make sure to include http:// or https:// in front.
                </text>
                <form onSubmit={handleSubmit} >
                    <input
                    type={"text"}
                    placeholder='https://www.google.com'
                    size={50}
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
                <text>
                    Your shortened url: {shortenedUrl}
                </text>
            </header>
        </div>
    );
}

export default App;
