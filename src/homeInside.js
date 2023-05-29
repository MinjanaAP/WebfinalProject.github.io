import { BrowserRouter as Router,Switch,Route, Routes } from "react-router-dom"
import ProductPage from "./Components/productpage"
import App from './App'
import FeedBack from "./Components/feedback"
import ScrollToTop from './Components/ScrollToTop'
import CommonPage from "./Components/CommonPage"

function HomeInside(){
    return(
    <Routes>
            <Route exact path='/' element = {<App/>} />
            <Route exact path= '/ProductPage' element = {<ProductPage/>}/>
            <Route exact path = '/Feedback' element = {<FeedBack/>}/>  
            <Route exact path = '/CommonPage' element = {<CommonPage/>}/>
     </Routes> 
    )
}

export default HomeInside;