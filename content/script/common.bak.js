var options = {
    animateThreshold: 100,
    scrollPollInterval: 50
};
var $window = $(window);
var $document = $(document);
var $body = $('body');

var isMobile = ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) );

var $new_header_containerex = $('#new_header_containerex');
$body.on('mousewheel',function(event,delta){
    if(delta < 0){
        //隐藏掉
        $new_header_containerex.removeClass('open');
    }else if(delta > 0){
        if($(window).scrollTop() <= 500){
            $new_header_containerex.removeClass('open');
        }else{
            $new_header_containerex.addClass('open');
        }
    }
});
$(function(){
    $('.grid_reveal').AniView(options);
});


//手机端案例展示
var $mobile_list_container = $('#mobile_list_container');

//手机端案例列表
var mobile_lists_show = {
    'id':'',
    'father_wrap':'',
    'base_wrap':'',
    'more_imgs_wrap':'',
    'body':'',
    'url':'',
    'imgs_list':'',
    'cover_img':'',
    'name':'',
    'designer':'',
    'location':'',
    'img_loader_count':0,
    '_init':function(id,father,base_wrap,more_imgs_wrap){
        this.id = id;
        this.father_wrap = father;
        this.base_wrap = base_wrap;
        this.more_imgs_wrap = more_imgs_wrap;
        this.body = $('body');
        this.url = this.father_wrap.parent('ul').attr('data-url') + '/project/getdetails';
        this.img_loader_count = 0;
        this._get_data();
    },
    '_load_img_list':function(){
        var $this = this;
        var imgs_size = $this.imgs_list.length;
        if(imgs_size > 0){
            // console.log('load_img_list');
            //有图片列表
            $.each($this.imgs_list,function(key,value){
                var img = new Image();
                img.src = value;
                if(img.complete){
                    $this.img_loader_count++;
                    $this._create_html();
                    return;
                }
                img.onload = function(){
                    $this.img_loader_count++;
                    $this._create_html();
                }
            });
        }
        return;
    },
    '_create_html':function(){
        var $this = this;
        var img_htmls = '';
        if($this.img_loader_count == $this.imgs_list.length){
            // console.log('created_html');
            $this.father_wrap.attr('data-loaded','yes');
            //创建img
            $.each($this.imgs_list,function(key,value){
                img_htmls += '<div class="more_img_grid self_slide_left" data-av-animation="self_slide_left"><img src="'+value+'" /></div>';
            });

            $this.more_imgs_wrap.append(img_htmls);
            // $this.base_wrap.find('.cover_img_box').append('<img src="'+$this.cover_img+'" />');
            $this.base_wrap.find('.mobile_p_name').html($this.name);
            $this.base_wrap.find('.mobile_p_designer').text($this.designer);
            $this.base_wrap.find('.mobile_p_location').text($this.location);
            $this._show();
        }
    },
    '_get_data':function(){
        var $this = this;
        if($this.father_wrap.attr('data-loaded') == 'no'){
            // console.log('get_data');
            $.ajax({
                url:$this.url,
                type:'GET',
                data:{'id':this.id},
                dataType:'json',
                beforeSend:function(){
                    $this.father_wrap.addClass('mobile_case_loading');
                },
                success:function(data){
                    if(data.status == 0){
                        $this.cover_img = data.data.cover_img;
                        $this.name = data.data.name;
                        $this.designer = data.data.interior_design;
                        $this.location = data.data.location;
                        $this.imgs_list = data.data.imgs;
                        $this._load_img_list();
                    }else{
                        //出错
                        alert('网络出错请重试');
                    }
                    $this.father_wrap.removeClass('mobile_case_loading');
                },
                error:function(){
                    $this.father_wrap.removeClass('mobile_case_loading');
                }
            });
        }else{
            $this._show();
        }

    },
    '_show':function(){
        // console.log('show');
        if(this.father_wrap.hasClass('active')){
            this.father_wrap.removeClass('active');
            // this.body.removeClass('caseShow');
        }else{
            this.father_wrap.addClass('active');
            // this.body.addClass('caseShow');
            // this._init_anyview();
        }
        $('#mobile_header_container').css({
            'height':'1.84rem'
        });
    },
    '_init_anyview':function(){

        $('.grid_reveal').AniView(options);
    }
};

function getShow(id,obj){
    var $father = $(obj);
    var $base_wrap = $father.find('.base_info_show');
    var $more_imgs_wrap = $father.find('.show_more_imgs');
    mobile_lists_show._init(id,$father,$base_wrap,$more_imgs_wrap);
    // var $this = $(obj);
    // if($this.hasClass('active')){
    //     $this.removeClass('active');
    //     $body.removeClass('caseShow');
    // }else{
    //     $this.addClass('active');
    //     $body.addClass('caseShow');
    //     $('.grid_reveal').AniView(options);
    // }
    //
    //
    //

    return false;
}








var $mobile_sub_nav_page = $('#mobile_sub_nav_page');
var $more_detail_container = $('#list_container_mobile .more_detail_container');
if($window.width() <= 760){
    FastClick.attach(document.body);
    $body.css('min-height',$window.height()+'px');
    $mobile_sub_nav_page.attr('data-height',$window.height()+'px');
    $more_detail_container.css('height',$window.height()+'px');
}


//手机端求职展开
var $mobile_job_container = $('#mobile_job_container');
var $mobile_job_detail = $mobile_job_container.find('.mobile_job_detail');
var $all_tasks = $mobile_job_container.find('.mobile_tasks');
var $requirements = $mobile_job_container.find('.mobile_requirements');
$all_tasks.on('click',function(){
  $mobile_job_detail.css('height',0);
  $all_tasks.removeClass('active');
  $requirements.removeClass('active');
  var $this = $(this);
  var $this_mobile_job_detail = $this.children('.mobile_job_detail');
  var $child = $this_mobile_job_detail.children('div');
  if(parseInt($this_mobile_job_detail.height()) == 0){
      $this.addClass('active');
      $this_mobile_job_detail.css('height',$child.height()+'px');
  }else{
      $this.removeClass('active');
      $this_mobile_job_detail.css('height','0');
  }
});
$requirements.on('click',function(){
  $mobile_job_detail.css('height',0);
  $all_tasks.removeClass('active');
  $requirements.removeClass('active');
  var $this = $(this);
  var $this_mobile_job_detail = $this.children('.mobile_job_detail');
  var $child = $this_mobile_job_detail.children('div');
  if(parseInt($this_mobile_job_detail.height()) == 0){
      $this.addClass('active');
      $this_mobile_job_detail.css('height',$child.height()+'px');
  }else{
      $this.removeClass('active');
      $this_mobile_job_detail.css('height','0');
  }
});
//手机端唤醒子菜单icon
var $sub_nav_bts = $('#sub_nav_bts');
var $mobile_header_container = $('#mobile_header_container');
var $hide_banner_top = $('#hide_banner_top');
$window.on('scroll',function(){
    if($window.scrollTop() >= 80){
        $sub_nav_bts.addClass('show');
        $mobile_header_container.css({
            'height':'1.84rem'
        });
        $hide_banner_top.css({
            'top':'1.84rem'
        });

    }else if($window.scrollTop() == 0){
        if(!$('body').hasClass('caseShow')){
            $sub_nav_bts.removeClass('show');
        }
        $mobile_header_container.css({
            'height':'3.33rem'
        });
        $hide_banner_top.css({
            'top':'3.33rem'
        }).addClass('close');
    }
});
var flag = true;
var $sub_nav_bg = $('#sub_nav_bg');
var $sub_nav_list = $('#sub_nav_list');
$sub_nav_bts.on('click',function(){
    if(flag){
      flag = false;
      if($sub_nav_bg.hasClass('active')){
          $sub_nav_bg.removeClass('active');
          $sub_nav_list.removeClass('active');
          $sub_nav_bts.removeClass('active');
          // $('body').removeClass('caseShow');
          // $sub_nav_bts.removeClass('show');
          setTimeout(function(){
            $mobile_sub_nav_page.css('height',0);
            $body.removeClass('is_nav');
          },600);
      }else{
          // $('body').addClass('caseShow');
          $body.addClass('is_nav');
          $sub_nav_bg.addClass('active');
          $sub_nav_list.addClass('active');
          $sub_nav_bts.addClass('active');
          $mobile_sub_nav_page.css('height',parseInt($('body').height()));
      }
      setTimeout(function(){
        flag = true;
      },600);
    }

});

//是否手机
if(isMobile){

    var d_height = parseInt($('body').height());
    var w_height = parseInt($window.height());


    var show_top_banner = {
        'ele':$('.scroll_header'),
        'text_container':$('#hide_banner_top'),
        'top_limit':parseInt($('#mobile_header_container').height()),
        'bottom_limit':300,
        'd_height':210,
        'active_ele':'',
        'switch':true,
        'getEleOffset':function(element){
            var offset_top = parseInt(element.offset().top) - 40;
            var offset_bottom = (offset_top + this.d_height*0.9);
            return {
                top: offset_top,
                bottom: offset_bottom
            };
        },
        'isEnterViewport':function(element){
            var _self = this;
            var window_scroll = _self.getScrollTop() + _self.top_limit;
            var eleOffset =_self.getEleOffset(element);

            var enterViewport = (window_scroll > eleOffset.top) ? true : false;

            return enterViewport;

        },
        'isBeyondViewprot':function(element){
            var _self = this;
            var window_scroll = _self.getScrollTop() + _self.top_limit;
            var eleOffset =_self.getEleOffset(element);
            var inViewport = (window_scroll < eleOffset.bottom) ? true : false;

            return inViewport;
        },
        'getScrollTop':function(){
            return parseInt($(document).scrollTop());
        },
        'hasEle':function(){
            var _self = this;
            return (_self.ele.length > 0) ? true : false;
        },
        'renderTopBanner':function(){
            var _self = this;
            if(_self.hasEle()){
                _self.ele.each(function(index,element){
                    var $element = $(element);
                    var work_name = '';
                    var isEnterViewport = _self.isEnterViewport($element);
                    var isBeyondViewport = _self.isBeyondViewprot($element);
                    var scrolltop = _self.getScrollTop();
                    if(isEnterViewport && isBeyondViewport && scrolltop > 0){
                        _self.active_ele = $element;
                        var $parent = $element.parents('.case1');
                        if($parent.length == 1){
                            work_name = $parent.find('.__img_box__text p').eq(1).text();
                        }else{
                            work_name = $element.find('.__img_box__text p').eq(1).text();
                        }
                        _self.buildHtml(work_name);
                    }else{
                        if(isEnterViewport && !isBeyondViewport){
                            _self.buildHtml('');
                            _self.active_ele = '';
                            _self.switch = true;
                        }
                    }
                });

                if($window.scrollTop() == 0){
                    var $__project_box = $('#main_container .__project_box');
                    $__project_box.find('.case1').removeClass('highlight');
                    $__project_box.removeClass('highlight');
                    _self.switch = true;
                }
            }
        },
        'buildHtml':function(work_name){
            var _self = this;
            if(work_name == ''){
                if(!_self.text_container.hasClass('close')){
                    _self.text_container.addClass('close');
                }
            }else{
                work_name = work_name.split('|');
                var html = '<p>' + work_name['0'].trim() +'</p><p>' + work_name['1'].trim()+ '</p>';
                if(_self.text_container.hasClass('close')){
                    _self.text_container.removeClass('close');
                }
                _self.text_container.find('.table_child').html(html);
            }
            // _self.hightlight();
        },
        'hightlight':function(){
            var _self = this;
            var $__project_box = $('#main_container .__project_box');
            if(_self.active_ele){

                //当前有高亮
                var $parent = _self.active_ele.parents('.__project_box');
                if($parent.length == 1){
                    //
                    // $parent.find('.case1').addClass('highlight');
                    var current_index = $parent.index();
                }else{
                    // _self.active_ele.addClass('highlight');
                    var current_index = _self.active_ele.index();
                }
                // console.log('有case1',current_index);

                var $gt = $('#main_container .__project_box:gt('+current_index+')');
                var $lt = $('#main_container .__project_box:lt('+current_index+')');
                if(_self.switch){
                    _self._highlights($gt);
                    _self._highlights($lt);
                }
                _self.switch = false;
            }else{
                // console.log('当前无激活');
                //当前无高亮
                $__project_box.find('.case1').removeClass('highlight');
                $__project_box.removeClass('highlight');
            }
        },
        '_highlights':function(ele){
            if(ele){
                ele.each(function(index,key){
                    var $this = $(this);
                    // console.log($this.index());
                    $this.addClass('highlight').find('.case1').addClass('highlight');
                });

            }
        }
    };

    $window.on({
        'scroll':function(){
            show_top_banner.renderTopBanner();
        }
    });


    $('.__project_box .case1').on({
        'touchstart':function(){
            $(this).addClass('cnmbshow');
        },
        'touchend':function(){
            $(this).removeClass('cnmbshow');
        }
    });

    $('.__project_box--single').on({
        'touchstart':function(){
            $(this).addClass('cnmbshow');
        },
        'touchend':function(){
            $(this).removeClass('cnmbshow');
        }
    });

}



