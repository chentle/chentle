import React,{Component} from 'react';
import {BrowserRouter,Route,Routes,Navigate} from 'react-router-dom';
// import { createHashHistory } from "history";
import App from '../App.js';
import {NeedSub,UnneedSub,University,Colloge} from '../pages/myapp/components/Subjects'
// const history = createHashHistory();

export default class RouterConfig extends Component {
  render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/needed' element={<NeedSub />}/>
                <Route path='/' element={<UnneedSub />}>
                  <Route path='university' element={<University/>}/>
                  <Route path='colloge' element={<Colloge/>}/>
                </Route>
                {/* <Route path="*" element={<Navigate to="/" />} /> */}
                {/* <Route path='/mail' element={<Mail/>}/> */}
            </Routes>
        </BrowserRouter>
      </React.StrictMode>
        

    )
  }
}
