import React, { useState } from "react"
import './App.css'

function App() {
  const [bgImage, setBgImage] = useState("https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stywo-1054218.jpg&fm=jpg");

  const themes = [
    {label: "Mountains", url: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stywo-1054218.jpg&fm=jpg"},
    {label: "Beach", url: "https://i.pinimg.com/originals/75/9f/bb/759fbbb9d1c003837b9d705963043310.jpg"},
    {label: "Forest", url: "https://images.unsplash.com/photo-1610447158291-d917870bf750?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8NGslMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D"},
    {label: "City", url: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D"},
    {label: "Desert", url: "https://png.pngtree.com/thumb_back/fh260/background/20230329/pngtree-tropical-desert-desert-image_2121120.jpg"},
  ];

  return (
    <div className="App" style={{backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh", width: "100vw"}}
    >
      <div className="content">
        <h1>Select a theme to change the background</h1>
      </div>
      <div className="button-container">{themes.map((theme, index) => (<button key={index} onClick={() => setBgImage(theme.url)} className="theme-button">
        {theme.label}
      </button> 
    ))}
      </div>
    </div>
  );
}

export default App
