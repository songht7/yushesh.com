class TopHeader extends React.Component {
    render() {
        return (
            <div>
              <div id="new_header_container" className="page_detail pc_block">
                <div className="nmbHover">
                    <div className="top_logo" onClick={() => window.location.href='http://www.yushesh.com/'}>
                        <img src="./content/images/logo.svg" alt=""/>
                    </div>
                    <ul className="sub_nav">
                        <li><a href="introduction.html">introduction | <span>简介</span></a></li>
                        <li><a href="job.html">jobs | <span>招聘</span></a></li>
                        <li><a href="contact.html">contact us | <span>联系</span></a></li>
                    </ul>
                </div>
            </div>
            <div id="new_header_containerex" className="page_detail pc_block">
                <div className="nmbHover">
                    <div className="top_logo" onClick={() => window.location.href='http://www.yushesh.com/'}></div>
                    <ul className="sub_nav">
                        <li><a href="introduction.html">introduction | <span>简介</span></a></li>
                        <li><a href="job.html">jobs | <span>招聘</span></a></li>
                        <li><a href="contact.hmtl">contact us | <span>联系</span></a></li>
                    </ul>
                </div>
            </div>
            <div id="mobile_header_container" className="mobile_block">
                <div className="mobile_top_logo" onClick={() => window.location.href='http://www.yushesh.com/'}>
                    <img src="./content/images/logo.svg" alt=""/>
                </div>
                <div id="sub_nav_bts">
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div id="mobile_sub_nav_page">
                    <div className="sub_nav_list" id="sub_nav_list">
                        <div className="mobile_top_logo"></div>
                        <ul>
                            <li className="tri_delay_1"><a href="introduction.html">Introduction</a></li>
                            <li className="tri_delay_2"><a href="award.html">AWARDS</a></li>
                            <li className="tri_delay_3"><a href="news.html">NEWS</a></li>
                            <li className="tri_delay_3"><a href="team.html">TEAM</a></li>
                            // <li className="tri_delay_3"><a href="">2008-2015 PROJECTS</a></li>
                            <li className="tri_delay_4"><a href="contact.html">Contact Us</a></li>
                            <li className="tri_delay_5"><a href="job.html">JOIN US</a></li>
                        </ul>
                    </div>
                    <div className="sub_nav_bg" id="sub_nav_bg"></div>
                </div>
            </div>
            <div id="hide_banner_top" className="mobile_block close">
                <div className="_nmb">
                    <div className="table_father">
                        <div className="table_child"></div>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}


ReactDOM.render(
    <TopHeader />,
    document.getElementById('TopHeader')
);