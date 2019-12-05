/**
 * Created by leezhang on 2017/11/14.
 */
(function($) {

    //custom scroll replacement to allow for interval-based 'polling'
    //rather than checking on every pixel.
    var uniqueCntr = 0;
    $.fn.scrolled = function(waitTime, fn) {
        if (typeof waitTime === 'function') {
            fn = waitTime;
            waitTime = 200;
        }
        var tag = 'scrollTimer' + uniqueCntr++;
        this.scroll(function() {
            var self = $(this);
            clearTimeout(self.data(tag));
            self.data(tag, setTimeout(function() {
                self.removeData(tag);
                fn.call(self[0]);
            }, waitTime));
        });
    };

    $.fn.AniView = function(options) {

        //some default settings. animateThreshold controls the trigger point
        //for animation and is subtracted from the bottom of the viewport.
        var settings = $.extend({
            animateThreshold: 0,
            scrollPollInterval: 20
        }, options);

        //keep the matched elements in a variable for easy reference
        var collection = this;

        //cycle through each matched element and wrap it in a block/div
        //and then proceed to fade out the inner contents of each matched element
        // $(collection).each(function(index, element) {
        //     $(element).wrap('<div class="av-container"></div>');
        //     $(element).css('opacity', 0);
        // });

        /**
         * returns boolean representing whether element's top is coming into bottom of viewport
         *
         * @param HTMLDOMElement element the current element to check
         */
        function EnteringViewport(element) {
            var elementTop = $(element).offset().top;
            var viewportBottom = $(window).scrollTop() + $(window).height();
            return (elementTop < (viewportBottom - settings.animateThreshold)) ? true : false;
        }

        function beyondViewport(element){
            var elementHeight = parseInt($(element).height());
            var elementTop = $(element).offset().top;
            var viewprotBeyond = $(window).scrollTop() + $(window).height();
            return ((viewprotBeyond < elementTop)) ? true : false;
        }

        /**
         * cycle through each element in the collection to make sure that any
         * elements which should be animated into view, are...
         *
         * @param collection of elements to check
         */
        function RenderElementsCurrentlyInViewport(collection) {
            $(collection).each(function(index, element) {
                var autoremove = $(element).attr('data-autoremove');
                autoremove = (autoremove === false) ? false : true;
                // var elementParentContainer = $(element).parent('.av-container');
                if ($(element).is('[data-av-animation]') && EnteringViewport(element)) {
                    if($(element).find('.lazy_container').size() == 1){
                        lazyLoad(element);
                    }else{
                        $(element).addClass('animated ' + $(element).attr('data-av-animation'));
                    }

                    // $(element).addClass('animated ' + $(element).attr('data-av-animation'));
                }
                // if ($(element).is('[data-av-animation]') && beyondViewport(element) && (autoremove === true)) {
                //     $(element).removeClass('animated ' + $(element).attr('data-av-animation'));
                // }
                //加class
                if ($(element).is('[data-add-class]') && EnteringViewport(element)) {
                    //
                    if($(element).find('.lazy_container').size() == 1){
                        lazyLoad(element);
                    }else{
                        $(element).addClass('animated ' + $(element).attr('data-add-class'));
                    }
                    // $(element).addClass('animated ' + $(element).attr('data-add-class'));
                }
                // if ($(element).is('[data-add-class]') && beyondViewport(element) && (autoremove === true)) {
                //     $(element).removeClass('animated ' + $(element).attr('data-add-class'));
                // }
            });
        }

        function lazyLoad(obj){
            var $obj = $(obj);
            var $lazy_container = $obj.find('.lazy_container');
            var $img = $lazy_container.find('img');
            var src = $img.attr('data-src');
            var image = new Image();
            image.onload = function(){
                if($obj.parents('.pre_load').size()==1){
                    $obj.parents('.pre_load').removeClass('pre_load');
                }
                $lazy_container.removeClass('lazy_container').addClass('loaded_container');
                $img.attr('src',src);
                $obj.addClass('animated ' + $obj.attr('data-av-animation'));
            }
            image.src = src;
        }

        //on page load, render any elements that are currently/already in view
        RenderElementsCurrentlyInViewport(collection);

        var timeintval = setInterval(function(){
            if($(window).scrollTop() <= 500){
                $('#new_header_containerex').removeClass('open');
            }
        },settings.scrollPollInterval);

        //enable the scrolled event timer to watch for elements coming into the viewport
        //from the bottom. default polling time is 20 ms. This can be changed using
        //'scrollPollInterval' from the user visible options
        $(window).scrolled(settings.scrollPollInterval, function() {
            RenderElementsCurrentlyInViewport(collection);
        });
    };
})(jQuery);