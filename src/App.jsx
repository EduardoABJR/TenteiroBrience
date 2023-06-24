import { useState } from 'react'
import brience from './assets/brience.png'


import './App.css'

function App() {
  const [nos, setNos] = useState(0)
  const [eles, setEles] = useState(0)

  return (

    <div className='tela-app'>
      <img className='logo' src={brience} />
   <div className='noseles'>
   <div >
    <h1>Nós</h1>
    <p><button disabled={nos >= 12} onClick={() => setNos((nos) => nos + 1)}>
      <i class="bi bi-arrow-up-circle"></i>
        </button></p>
    <p className='tentos'>{nos}</p> 
    <p><button disabled={nos < 1} onClick={() => setNos((nos) => nos - 1)}>
    <i class="bi bi-arrow-down-circle"></i>
        </button></p> 
   </div>
  <div>
  <h1>Eles</h1>
  <p><button  disabled={eles >= 12} onClick={() => setEles((eles) => eles + 1)}>
    <i class="bi bi-arrow-up-circle"></i>
      </button></p>
  <p className='tentos'>{eles}</p> 
  <p><button disabled={eles < 1}onClick={() => setEles((eles) => eles - 1)}>
  <i class="bi bi-arrow-down-circle"></i>
      </button></p> 
 </div>
 </div>
 <button className='btnzero' onClick={() => {
  const shouldContinue = window.confirm('Deseja zerar os tentos?');
  if (shouldContinue) {
    setEles(0);
    setNos(0);
  }
}}>Zerar</button>
 </div>

  )
}

export default App
