import { useState } from 'react'
import './App.css'

function App() {

  const [myEmojis, setMyEmojis]= useState(["👨‍💻", "⛷", "🍲"])
  const [input, setInput] = useState([])

  function arraylogic(e){
    const ref = e.target.className
    if (ref === "push") {
      setMyEmojis([...myEmojis,[input]])
    } else if (ref === "unshift") {
      setMyEmojis([[input],...myEmojis])
    } else if (ref === "shift") {
      setMyEmojis([...myEmojis.slice(1)])
    } else if (ref === "pop") {
      setMyEmojis([...myEmojis.slice(0,-1)])
    }
    setInput('')
  }
  
  return (
    <div className="app">
      <h1>My Emojis</h1>
      <div className="emoji-container"><span>{myEmojis}</span></div>
      <input 
        type="text"  
        onChange={(e)=>setInput(e.target.value)}
        value={input}
        placeholder="type an emoji 🎉">
      </input>
      <button className="push" onClick={arraylogic}>Add to end</button>
      <button className="unshift" onClick={arraylogic}>Add to start</button>
      <button className="shift" onClick={arraylogic}>Remove from start</button>
      <button className="pop" onClick={arraylogic}>Remove from end</button>
    </div>
  )
}

export default App
