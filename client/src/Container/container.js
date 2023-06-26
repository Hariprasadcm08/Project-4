import React, { useState } from 'react';
import './container.css';
import axios from 'axios';

function Container() {
  const [url, setUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    const inputField = document.getElementById('shortUrl');
    inputField.select();
    if (inputField.value.trim() === '') {
      alert('Field is empty');
      return;
    }
  
    document.execCommand('copy');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500); 
  };

  const fetchData = async () => {
    try {
      
      if (longUrl.trim() === '') {
        alert('Please enter a URL to shorten');
        return;
      }
      const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
       if (!urlRegex.test(longUrl)) {
        alert('Invalid URL format. Please enter a valid URL to shorten.');
        return;
      }
      const response = await axios.post('http://localhost:5000/url/shorten', { longUrl });
      setUrl(response.data.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="main">
  <div className="box">
    <h2 id="caution">Enter Your URL here</h2>
    <input id="enterUrl" className="enterUrl" onChange={(e) => setLongUrl(e.target.value)} />
    <button className="convertUrl" onClick={fetchData}>
      Shorten URL
    </button>
    <div className="notification">
      {copied && <p id="noti"><b>Link-copied</b></p>}
    </div>
    <input id="shortUrl" className="shortUrl" value={url} />
    <button className="copyShortUrl" onClick={handleCopyClick}>
      Copy URL
    </button>
  </div>
</div>

  );
}

export default Container;
