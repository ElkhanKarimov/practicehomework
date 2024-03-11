
// import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './layout/Header';
import Card from './pages/Card';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Card>
      <div className="cards">
      <div className='card'>
        <div className='cardicon'><i class="fa-solid fa-folder"></i></div>
        <div className='cardtitle'>Featured title</div>
        <div className='cardinfo'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</div>
        <div className='cardlink'><a href="">Call to action</a></div>
      </div>
      <div className='card'>
        <div className='cardicon'><i class="fa-solid fa-house"></i></div>
        <div className='cardtitle'>Featured title</div>
        <div className='cardinfo'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</div>
        <div className='cardlink'><a href="">Call to action</a></div>
      </div>
      <div className='card'>
        <div className='cardicon'><i class="fa-solid fa-right-left"></i></div>
        <div className='cardtitle'>Featured title</div>
        <div className='cardinfo'>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</div>
        <div className='cardlink'><a href="">Call to action</a></div>
      </div>
      </div>
      </Card>
    </>
  );
}

export default App;
