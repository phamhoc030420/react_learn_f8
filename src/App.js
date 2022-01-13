import logo from './logo.svg';
import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import { memo, useState } from 'react';
import PhanThuong from './baiTap26/phanThuong';
import TwoWayBinding from './baiTap26/Check_Radio';
import CheckBox from './baiTap26/Check_Box';
import ToDoList from './toDoList/ToDo';
import Effect from './useEffect_bai29/useEffect';
import SetTimeOut_Interval from './useEffect_bai29/setTimeOut_Interval';
import Avatar from './avatar_bai33/avatar';
import ChatApp from './fake_chat_app/chatApp';
import Content from './useLayoutEffect/Content';
import UseRef from './useRef/useRef';
import Memo from './useCallback/memo';
import UseMemo from './useMemo/useMemo';
import UseReducer from './useReducer/useReducer';
import UseContext from './useContext/useContext';
import ToDo from './todoGlobal';
import ImperctiveHandle from './useImperativeHandle/ImperativeHandle';
import Main from './clxs_css_module/main';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import New from './Pages/New';



const orders = [100, 200, 300];
function App() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(false);
  const [show7, setShow7] = useState(false);
  const [show8, setShow8] = useState(false);
  const [show9, setShow9] = useState(false);
  const [show10, setShow10] = useState(false);
  const [show11, setShow11] = useState(false);
  const [state, setState] = useState(() => {
    const total = orders.reduce((total, cur) => total + cur);
    console.log(total);
    return total;
  });
  const [info, setInfo] = useState({
    name: 'Pham Hoc',
    age: 21,
    add: 'TH'
  })
  const handlerUpdate = () => {
    setInfo({
      name: 'Hoc',
      age: 18,
      add: 'HN'
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <nav >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
            <li>
              <Link to='/new'>New</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/new' element={<New />} />

        </Routes>

        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <button onClick={() => setShow(!show)}>Toggle</button>
        <br></br>
        {show && <>  <p>{state}</p>
          <button onClick={() => { setState(state + 1) }}>Tang</button>
          <p>{info.name}-{info.age}-{info.add}</p>
          <button onClick={handlerUpdate}>Update</button>
        </>
        }
        {show && <PhanThuong />}
        {show && <TwoWayBinding />}
        {show && <CheckBox />}
        <ToDoList />
        <button onClick={() => setShow1(!show1)}>Toggle</button>
        {show1 && <Effect />}
        <button onClick={() => setShow2(!show2)}>TimeDown</button>
        {show2 && <SetTimeOut_Interval />}
        <Avatar />

        <button onClick={() => setShow3(!show3)}>ChatApp</button>
        {show3 && <ChatApp />}
        <button onClick={() => setShow4(!show4)}>LayOut</button>
        {show4 && <Content />}
        <button onClick={() => setShow5(!show5)}>Ref</button>
        {show5 && <UseRef />}
        <Memo />

        <button onClick={() => setShow6(!show6)}>UseMemo</button>
        {show6 && <UseMemo />}

        <button onClick={() => setShow7(!show7)}>Reducer</button>
        {show7 && <UseReducer />}
        <button onClick={() => setShow8(!show8)}>Context</button>
        {show8 && <UseContext />}
        <button onClick={() => setShow9(!show9)}>ToDo Gobal</button>
        {show9 && <ToDo />}
        <button onClick={() => setShow10(!show10)}>ImperctiveHandle</button>
        {show10 && <ImperctiveHandle />}
        <button onClick={() => setShow11(!show11)}>CLSX</button>
        {show11 && <Main />}
      </header>
    </div>
  );
}

export default App;
