import React, { useState } from 'react';
import './container.css';
import axios from 'axios';

function Container() {
  const [url, setUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');

  const handleCopyClick = () => {
    const inputField = document.getElementById('shortUrl');
    inputField.select();
    document.execCommand('copy');
  };

  const fetchData = async () => {
    try {
      const response = await axios.post('http://localhost:5000/url/shorten', { longUrl });
      setUrl(response.data.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
      <div className="box">
        <div>
          <h2 id="caution">Enter Your URL here</h2>
        </div>
        <div>
          <input id="enterUrl" className="enterUrl" onChange={(e) => setLongUrl(e.target.value)} />
        </div>
        <button className="convertUrl" onClick={fetchData}>
          Shorten URL
        </button>
        <input id="shortUrl" className="shortUrl" value={url} />
        <button className="copyShortUrl" onClick={handleCopyClick}>
          Copy URL
        </button>
      </div>
    </div>
  );
}

export default Container;
