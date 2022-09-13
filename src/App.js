// JSX = javascript + XML
// cái này là cú pháp đặc biệt cho phép viết HTML ở trong javascript
// Các property/attribute sẽ được viết theo quy tắc camelCase
// class => className

import Home from "./components/BTLayout/Home"
import BaiTapMovie from "./components/BTMovie/BaiTapMovie"
import BTPhone from "./components/BTPhone/BTPhone"
import BTPhoneRedux from "./components/BTPhoneRedux/BTPhoneRedux"
import BTShoeShop from "./components/BTShoeShop/BTShoeShop"
import BaiTapChonXe from "./components/BTXe/BaiTapChonXe"
import BaiTapChonXeRedux from "./components/BTXeRedux/BaiTapChonXeRedux"
import BTXucXac from "./components/BTXucXac/BTXucXac"
import DataBinding from "./components/Databinding/DataBinding"
import ClassComponent from "./components/demoComponent/ClassComponent"
import FunctionComponent from "./components/demoComponent/FunctionComponent"
import DemoRedux from "./components/DemoRedux/DemoRedux"
import HandleEvent from "./components/handleEvent/HandleEvent"
import Parent from "./components/props/Parent"
import RenderingWithConditions from "./components/RenderingWithConditions/RenderingWithConditions"
import RenderingWithMap from "./components/RenderingWithMap/RenderingWithMap"
import State from "./components/State/State"
import StyleComponent from "./components/styleComponent/StyleComponent"

//  Component có 2 loại: 
//  Function Component 
//  Class Component

function App() {
    return (
        <div className="App">
            {/* <p>Nguyễn Viết Hải</p> */}
            {/* <button onClick={}></button> */}
            {/* <ClassComponent></ClassComponent>
            <ClassComponent />
            <FunctionComponent></FunctionComponent>
            <FunctionComponent /> */}

            {/* Bài tập dàn layout component */}
            {/* <Home /> */}

            {/* Databinding */}
            {/* <DataBinding /> */}

            {/* Xử lý event */}

            {/* <HandleEvent /> */}

            {/* <StyleComponent /> */}

            {/* <RenderingWithConditions /> */}

            {/* <RenderingWithMap /> */}

            {/* <State /> */}

            {/* <BaiTapChonXe /> */}

            {/* <BaiTapMovie /> */}

            {/* Props */}
            {/* <Parent /> */}

            {/* <BTShoeShop /> */}

            {/* <BTPhone /> */}

            {/* <DemoRedux /> */}

            {/* <BaiTapChonXeRedux /> */}

            {/* <BTPhoneRedux /> */}
            <BTXucXac />
        </div>
    )
}

export default App
