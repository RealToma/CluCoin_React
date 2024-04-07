import logo from './logo.svg';
import './App.css';
import { Header } from './function_components/header';
import { Content } from './function_components/content';
import { Footer } from './function_components/footer';
import '../src/css/mainpage.css';
import {Button} from '@mui/material';

import Img from '../src/images/mark.png';

function App() {
  return (
    <div classNameName="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
      {/* <div className="i_home">
            <div className="i_header">
                <div className="ih_left">
                    <img src={Img}  height="30px"/>
                </div>
                <div className="ih_center">
                    <a href="/">Home</a>
                    <a href="/">How to Buy</a>
                    <a href="/">White Paper</a>
                    <a href="/">Roadmap</a>
                    <a href="/">Merch</a>
                </div>
                <div className="ih_right">
                    <Button className="btn_log1">Oxce...64e</Button>
                    <Button className="btn_log2">Man</Button>
                    <img className="img_log3" src="./src/image/log_down.png"/>
                </div>
            </div>
            <div className="i_content">
                <div className="ic_1">
                    <div className="ic_up">
                        <span className="ic_pink">TOGETHER</span>
                        <span className="ic_white">WE CAN</span>
                        <span className="ic_pink">CHANGE</span>
                        <span className="ic_white">THE WORLD</span>
                    </div>
                    <div className="ic_down">
                        <span className="ic_down1">Hyper Deflationary Token with Smart Staking System. Hold, earn and help others in need.</span>
                    </div>
                </div>
                <div className="ic_2">
                    <div className="ic_21">
                        <div className="ic2_up">Purchase CluCoin</div>
                        <div className="ic2_center">Available on Pancakeswap</div>
                        <div className="ic2_down">
                            <Button className="ic2_down_btn">Buy Now</Button>
                        </div>
                    </div>
                </div>
                <div className="ic_3">
                    <div className="ic31">
                        <div className="ic3_up">
                            $0.0000001309
                        </div>
                        <div className="ic3_down">
                            current price
                        </div>
                    </div>
                    <div className="ic32">
                        <div className="ic3_up">
                            52,070
                        </div>
                        <div className="ic3_down">
                            holders
                        </div>
                    </div>
                    <div className="ic33">
                        <div className="ic3_up">
                            1,000,000,000,000,000
                        </div>
                        <div className="ic3_down">
                            supply
                        </div>
                    </div>
                    <div className="ic34">
                        <div className="ic3_up">
                            $115,310,412
                        </div>
                        <div className="ic3_down">
                            market cap
                        </div>
                    </div>
                </div>
            </div>

        </div>
         */}

    </div>
  );
}

export default App;
