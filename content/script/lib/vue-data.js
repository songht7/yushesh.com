// npx babel dev -d lib
import product from './product.json.js';
new Vue({
  el: "#Wrapper",
  data: {
    id: "",
    ctg: "",
    products: product.proList,
    detail: {}
  },

  created(e) {
    console.log("created:");
  },

  mounted(e) {
    console.log("mounted:");
    var that = this;

    var _ctg = that.GetUrlParam("ctg");

    var _id = that.GetUrlParam("id");

    that.ctg = _ctg;
    that.id = _id;
    that.setData(); //async
  },

  methods: {
    winLocation(id) {
      window.location.href = '/pro_detail.html?id=' + id;
    },

    setData() {
      var that = this;
      var _ctg = that.ctg,
          _id = that.id;

      if (_id) {
        console.log("_id");
        let detail = that.products.filter((obj, k) => obj.id == _id);
        that.detail = detail[0];
        console.log(that.detail);
        setTimeout(() => {
          $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 0
          });
          $('.grid_reveal').AniView(options);
        }, 1000);
      }

      if (_ctg) {
        console.log("_ctg");
        that.products = that.products.filter((obj, k) => obj.ctg == _ctg);
        setTimeout(() => {
          $('.grid_reveal').AniView(options);
        }, 1000);
      } else {
        setTimeout(() => {
          if ($('.grid').length) {
            $('.grid').masonry({
              itemSelector: '.grid-item',
              columnWidth: 0
            });
          }

          $('.grid_reveal').AniView(options);
        }, 1000);
      }

      console.log(that.products);
    },

    GetUrlParam(paraName) {
      var url = window.location.toString();
      var arrObj = url.split("?");

      if (arrObj.length > 1) {
        var arrPara = arrObj[1].split("&");
        var arr;

        for (var i = 0; i < arrPara.length; i++) {
          arr = arrPara[i].split("=");

          if (arr != null && arr[0] == paraName) {
            return arr[1];
          }
        }

        return "";
      } else {
        return "";
      }
    }

  }
});