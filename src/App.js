import logo from './logo.svg';
import './App.css';

import Faq from './components/Faq'
// 就能使用 Faq那個函式頁面(擁有這個函式功能) 來自於這裡(順利吃到外部元件)
// 因此我們不會全部都寫在App.js 會拉出很多很多外部元件 一一載入使用

import { Routes, Route, Link } from "react-router-dom";







function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/faq">Faq</Link>
      </nav>
    </>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>about 頁面</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}









function NotFound() {
  return (
    <>
      <h2>找不到該頁面, 您的網址出錯嘍~</h2>
      <Link to="/">回到首頁</Link>
    </>
  );
}



// ------------------------------------------------------
// 路由的路徑設定 不用斜線 他並不是像元件頁面要連去哪 只是先設定路徑而已
// 設定的路徑 以網址來講 是以小寫為主(不過大小寫 作為網址好像都可適用?)

// 下面的路由表 是註冊(Route)路由可用的路徑 , 而非使用(Link)使用是使用在元件內
// 如果 Link 有使用到(例如 /about ) 我設定Route 的about 才去打開element About元件頁

// 因此一定要先註冊我想要的路徑才能使用  , 若輸入沒有註冊的網址 就不會有畫面 也不會報錯
// 就不會顯示 各種元件而已 因此我們會寫找不到頁面的機制 想去沒有註冊的網址 都歸類為找不到
// Notfound 元件名可自定 但路徑 就是必須為 ＊字號

// 若我想更細 /about/member 是可以的 , 路由可以再包子路由

// element 是什麼?  element是載入React 元件 
// 元件要載入哪個元件  --->>  App元件 載入匹配 後面那個接續的元件頁
// (我註冊的這個網址路徑 告訴我要使用哪個元件)

function App() {
  return (
    <div className="App">
      {/* <div>123</div>
      <h1>func App歡迎 Welcome to React Router! 歡迎</h1> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="faq" element={<Faq />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
