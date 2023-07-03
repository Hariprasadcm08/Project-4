import React, { useState } from 'react';
import './container.css';
import axios from 'axios';
import {ToastContainer ,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function Container() {
  const [url, setUrl] = useState('');
  const [longUrl, setLongUrl] = useState('');
  // const [copied, setCopied] = useState(false);


  const toastOption ={
    autoClose:600,
    pauseOnHover:true

 }
  const handleCopyClick = () => {
    const inputField = document.getElementById('shortUrl');
    inputField.select();
    if (inputField.value.trim() === '') {
     
      toast("Field is empty",toastOption)
      return;
    }
  
    document.execCommand('copy');
    //setCopied(true);
    toast("Link Copied",toastOption)
  //   setTimeout(() => {
  //     setCopied(false);
  //   }, 500); 
   };

  const fetchData = async () => {
    try {
      
      if (longUrl.trim() === '') {
        // alert('Please enter a URL to shorten');
        toast("Please enter a URL to shorten",toastOption)
        return;
      }
      const urlRegex = /^(https?:\/\/)?(?:w{3}\.)?([^\s\/$.?#]+\.[a-zA-Z]{2,3})(\/[^\s]*)?$/;

      if (!urlRegex.test(longUrl)) {
        //alert('Invalid URL format. Please enter a valid URL to shorten.');
        toast("Invalid URL format. Please enter a valid URL to shorten",toastOption)
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
      {/* {copied && <p id="noti"><b>Link-copied</b></p>} */}
    </div>
    <input id="shortUrl" className="shortUrl" value={url} />
    <button className="copyShortUrl" onClick={handleCopyClick}>
      Copy URL
    </button>
  </div>
  <ToastContainer
  position="top-right"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  
  
  />
</div>

  );
}

export default Container;
