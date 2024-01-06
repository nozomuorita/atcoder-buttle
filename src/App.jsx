import { useState } from 'react'
import './App.css'
import crown from "./assets/crown.png"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// const puppeteer = require('poppeteer');

function App() {
  const [count, setCount] = useState(0)
  
  // async function get(username){
  //   try {
  //     json = await (await fetch(`https://atcoder.jp/users/${username}/history/json`)).json();
  //     // console.log(json);
  //     page = parser.parseFromString(await (await fetch(`https://atcoder.jp/users/${username}/history`)).text(),"text/html").getElementById("history").children[1].children;
  //     // console.log(page);
  // } catch (reaseon) { console.log('try失敗') }
  // {
  //     // rated参加ならデータに追加
  //     for (let i = 0; i < json.length; i++) {
  //         let rated = json[i].IsRated;
  //         if (rated){
  //             json[i].Performance=Number(page[i].children[3].innerText);
  //             perf_rating_history.push({ ...json[i] });
  //         }
  //     // パフォが低いものはマイナスパフォになってることがあるのでマイナスの場合は0としておく
  //     for (let i = 0; i < perf_rating_history.length; i++) {
  //         if (perf_rating_history[i].Performance<0){
  //             perf_rating_history[i].Performance = 0;
  //         }
  //     }
  //     }
  //     // console.log(perf_rating_history)
  // }
  // console.log(perf_rating_history);
  // }

  const getUserData = (user) => {

  }

  const judge = () => {
    var user1 = document.getElementById("input1").value;
    var user2 = document.getElementById("input2").value;
    console.log(user1, user2)
    var winner = document.getElementById("winner");
    winner.innerText = user1;
    // get(user1);
  }

  return (
    <>
      {/* title */}
      <div className='title'>
        <h1>AtCoder Buttle</h1>
      </div>

      {/* text-box(username) */}
      <div className='input-container col-sm-5 mx-auto'>
        <Form.Label htmlFor="inputPassword5" className='text-white fw-bold fs-4 me-1'>User1</Form.Label>
        <Form.Control
          id="input1"
          className='inputbox me-3'
        />
        <Form.Label htmlFor="inputPassword5" className='text-white fw-bold fs-4 me-1'>User2</Form.Label>
        <Form.Control
          id="input2"
          className='inputbox'
        />
      </div>

      {/* button */}
      <div className='col-sm-3 mx-auto mt-3 d-flex justify-content-center'>
        <Button variant="dark" className='w-50 fw-bold' onClick={judge}>Buttle!</Button>
      </div>

      <div className='col-sm-7 bg-danger mt-4 mx-auto'>
        <div className='d-flex justify-content-center align-items-center'>
          {/* <img src={crown} className='aaa' /> */}
          <h2 className='text-center me-2'>Win:</h2>
          <h2 id='winner'></h2>
        </div>
        <div className='d-flex justify-content-center mt-1'>
          <p className='fs-2 fw-bold' id='user1-score'>5</p>
          <p className='fs-2 fw-bold mx-3'>-</p>
          <p className='fs-2 fw-bolder' id='user2-score'>4</p>
        </div>
      </div>
  </>
  )
}

export default App
