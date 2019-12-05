Vue.component('top-header', {
    props: {
        ctgList: {
            type: Array,
            default: function(e) {
                return [{ "id": 1, "label": "办公空间" },
                    { "id": 2, "label": "会所售楼处" },
                    { "id": 3, "label": "酒店" },
                    { "id": 4, "label": "商业空间" },
                    { "id": 5, "label": "私宅样板房别墅" },
                    { "id": 6, "label": "文博产业" }
                ]
            }
        }
    },
    mounted: function() {},
    template: `<div><div id="new_header_container" class="page_detail pc_block">
                    <div class="nmbHover">
                        <div class="top_logo" onClick="window.location.href='index.html'"><img src="./content/images/logo.png" alt="" /></div>
                        <ul class="sub_nav">
                            <li><a href="index.html"><span>简介</span></a></li>
                            <li>
                                <a href="works.html"><span>作品</span></a>
                                <ul class="nav_sub">
                                    <li v-for="c,i in ctgList" :key="i"><a :href='"works.html?ctg="+c.id'><span>{{c.label}}</span></a></li>
                                </ul>
                            </li>
                            <li><a href="job.html"><span>招聘</span></a></li>
                            <li><a href="contact.html"><span>联系我们</span></a></li>
                        </ul>
                    </div>
                </div>
                <div id="new_header_containerex" class="page_detail pc_block">
                    <div class="nmbHover">
                        <div class="top_logo" onClick="window.location.href='index.html'"></div>
                        <ul class="sub_nav">
                            <li>
                                <a href="index.html"><span>简介</span></a>
                            </li>
                            <li><a href="works.html"><span>作品</span></a>
                                <ul class="nav_sub">
                                    <li v-for="c,k in ctgList" :key="k"><a :href='"works.html?ctg="+c.id'><span>{{c.label}}</span></a></li>
                                </ul></li>
                            <li><a href="job.html"><span>招聘</span></a></li>
                            <li><a href="contact.html"><span>联系我们</span></a></li>
                        </ul>
                    </div>
                </div>
                <div id="mobile_header_container" class="mobile_block">
                    <div class="mobile_top_logo" onClick="window.location.href='index.html'"><img src="./content/images/logo.png" alt="" /></div>
                    <div id="sub_nav_bts">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>
                    <div id="mobile_sub_nav_page">
                        <div class="sub_nav_list" id="sub_nav_list">
                            <div class="mobile_top_logo"></div>
                            <ul>
                                <li class="tri_delay_2"><a href="index.html">简介</a></li>
                                <li class="tri_delay_1">
                                    <a href="works.html">作品</a>
                                    <ul class="nav_sub_m">
                                        <li v-for="c,l in ctgList" :key="l"><a :href='"works.html?ctg="+c.id'><span>{{c.label}}</span></a></li>
                                    </ul>
                                </li>
                                <li class="tri_delay_4"><a href="job.html">招聘</a></li>
                                <li class="tri_delay_3"><a href="contact.html">联系我们</a></li>
                            </ul>
                        </div>
                        <div class="sub_nav_bg" id="sub_nav_bg"></div>
                    </div>
                </div>
                <div id="hide_banner_top" class="mobile_block close">
                    <div class="_nmb">
                        <div class="table_father">
                            <div class="table_child"></div>
                        </div>
                    </div>
                </div>
            </div>
            `,
    data: function() {
        return {}
    }
})

Vue.component('mobile-share', {
    template: '<div class="mobile_share_container"><div class="share_grid wechat" style="margin-left: 0"></div></div>',
    data: function() {
        return {}
    }
})

Vue.component('footer-box', {
    template: '<div class="foot">\
                <div id="new_footer_container" class="pc_block">\
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p>\
                </div>\
                <div id="mobile_footer_container" class="mobile_block border-top-1px">\
                    <p>版权所有 ©御舍 沪ICP备19029924号-1</p>\
                </div>\
            </div>',
    data: function() {
        return {}
    }
})