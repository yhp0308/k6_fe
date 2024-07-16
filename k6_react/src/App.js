// import HelloCss from "./02/HelloCss";
// import Lotto from './06/Lotto';
// import FoodMain from './07/FoodMain';
// import MyClock from './08/MyClock';
import TrafficMain from './09/TrafficMain';
import './App.css'
import { IoHome } from "react-icons/io5";
// import MyDiv1 from "./03_1/MyDiv1";
// import MyList from "./04/MyList";
// import MyListMain from "./04/MyListMain";
// import BoxOfficeTb from './05/BoxOfficeTb';

function App() {

  return (
    <div className='flex flex-col
    w-full max-w-screen-xl
    h-screen
    mx-auto
    overscroll-y-auto
    '>
      <header className='flex justify-between
      h-20
      p-10
      text-xl font-bold text-blue-800
      border-x-green-600
      bg-slate-100
      items-center
      '>
        <div>리액트 실습</div>
        <div>
          <IoHome className="text-2xl text-black"/>
        </div>
      </header>
      <main className='grow
      text-2xl flex flex-col
      justify-center items-center
      '>
        <TrafficMain />
      </main>
      <footer className='flex justify-center items-center
      h-20 bg-slate-800
      text-base text-white'>
        © 2024 YunHwanPark. All right reserved.
      </footer>
    </div>
  );
}

export default App;

// 컴포넌트 명은 다 대문자로 시작한다.
// 리액트에서 HTML태그인지 컴포넌트 태그인지 구분하기 위해서 대소문자 구분을 한다.