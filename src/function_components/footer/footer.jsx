import React, { useEffect } from 'react';
import '../../css/mainpage.css';


function Footer() {
    return (
        <div className="footer">
            <div className="i_ocontent">
                <div className="ioc1">
                    <span className="ioc1_w">KEY</span>
                    <span className="ioc1_p">FEATURES</span>
                </div>
                <div className="ioc2">
                    <pre className="ioc2_w">
                        CluCoin is the first token designed with the users and a charity system built straight into its core
                        We've built a system designed to protect against whales, encourage holding and help charities around the world.
                    </pre>
                </div>
                <div className="ioc3">
                    <div className="ioc31">

                    </div>
                    <div className="ioc31">

                    </div>
                    <div className="ioc31">

                    </div>
                </div>
            </div>  
            <div className="i_ofooter">
                <span className="i_o1">Listed exchanges</span>
            </div>  
        </div>
    );
}

export { Footer };