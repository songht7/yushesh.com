// http://www.yushesh.com/
class Logo extends React.Component {
    render() {
        return (
            <div className="top_logo" onClick={()=>window.location.href='index.html'}>
                <img src="./content/images/logo.png" alt=""/>
            </div>
        );
    }
}
class TopLogo extends React.Component {
    render() {
        return (
            <div className="top_logo" onClick={()=>window.location.href='index.html'}></div>
        );
    }
}
class MobileLogo extends React.Component {
    render() {
        return (
            <div className="mobile_top_logo" onClick={()=>window.location.href='index.html'}>
            <img src="./content/images/logo.png" alt="" />
        </div>
        );
    }
}

class MobileNav extends React.Component {
    render() {
        return (
            <ul>
                <li className="tri_delay_1">
                    <a href="index.html">作品</a>
                    <ul className="nav_sub_m">
                        <li><a href="index.html?ctg=1"><span>私宅、样板房、别墅</span></a></li>
                        <li><a href="index.html?ctg=2"><span>会所、售楼处</span></a></li>
                        <li><a href="index.html?ctg=3"><span>酒店</span></a></li>
                        <li><a href="index.html?ctg=4"><span>办公</span></a></li>
                        <li><a href="index.html?ctg=5"><span>商业空间</span></a></li>
                    </ul>
                </li>
                <li className="tri_delay_2"><a href="introduction.html">简介</a></li>
                {/* <li className="tri_delay_2"><a href="award.html">AWARDS</a></li>
                <li className="tri_delay_3"><a href="news.html">NEWS</a></li>
                <li className="tri_delay_3"><a href="team.html">TEAM</a></li>*/}
                <li className="tri_delay_4"><a href="job.html">招聘</a></li>
                <li className="tri_delay_3"><a href="contact.html">联系我们</a></li>
            </ul>
        );
    }
}

class PCNav extends React.Component {
    render() {
        return (
            <ul className="sub_nav">
                <li>
                    <a href="index.html"><span>作品</span></a>
                    <ul className="nav_sub">
                        <li><a href="index.html?ctg=1"><span>私宅、样板房、别墅</span></a></li>
                        <li><a href="index.html?ctg=2"><span>会所、售楼处</span></a></li>
                        <li><a href="index.html?ctg=3"><span>酒店</span></a></li>
                        <li><a href="index.html?ctg=4"><span>办公</span></a></li>
                        <li><a href="index.html?ctg=5"><span>商业空间</span></a></li>
                    </ul>
                </li>
                <li><a href="introduction.html"><span>简介</span></a></li>
                <li><a href="job.html"><span>招聘</span></a></li>
                <li><a href="contact.html"><span>联系我们</span></a></li>
            </ul>
        );
    }
}

class MobileShare extends React.Component {
    render() {
        return (
            <div className="mobile_share_container">
                {/* <div className="share_grid weibo"></div>*/}
                <div className="share_grid wechat" style={{marginLeft: 0}}></div>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <div className="foot">
                <div id="new_footer_container" className="pc_block">
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p>
                </div>
                <div id="mobile_footer_container" className="mobile_block border-top-1px">
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p> 
                </div>
            </div>
        );
    }
}

if (document.querySelector("#Logo")) {
    ReactDOM.render(
        <Logo />,
        document.querySelector("#Logo")
    );
}
ReactDOM.render(
    <TopLogo />,
    document.querySelector("#TopLogo")
);
ReactDOM.render(
    <MobileLogo />,
    document.querySelector("#MobileLogo")
);

ReactDOM.render(
    <PCNav />,
    document.querySelector(".pcNav")
);
ReactDOM.render(
    <MobileNav />,
    document.querySelector("#MobileNav")
);

if (document.querySelector("#MobileShare")) {
    ReactDOM.render(
        <MobileShare />,
        document.querySelector("#MobileShare")
    );
}
ReactDOM.render(
    <Footer />,
    document.querySelector("#Footer")
);