import React, { useEffect } from 'react';
import {Grid} from '@mui/material';
import '../../css/mainpage.css';

function Content() {
    return (
        <div className="i_content">
            <div className="ic_1">
                <div className="ic_up">
                    <span className="ic_pink">TOGETHER</span>
                    <span className="ic_white">WE CAN</span>
                    <span className="ic_pink">CHANGE</span>
                    <span className="ic_white">THE WORLD</span>
                </div>
                <div className="ic_down">
                    Hyper Deflationary Token with Smart Staking System. Hold, earn and help others in need.
                </div>
            </div>
            <div className="ic_2">
                <div className="ic_21">
                    <div className="ic2_up">Purchase CluCoin</div>
                    <div className="ic2_center">Available on Pancakeswap</div>
                    <div className="ic2_down">
                        <button className="ic2_down_btn">Buy Now</button>
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
    );
}

export { Content };