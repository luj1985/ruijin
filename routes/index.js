var express = require('express');
var router = express.Router();

const vips = [
  { name: "殿塚 亮祐", img: "1殿塚 亮祐.jpg", detail: "详细-33.jpg", link: "/vips/1" },
  { name: "龚彪", img: "2龚彪.jpg", detail: "详细-34.jpg", link: "/vips/2" },
  { name: "郭学刚", img: "3郭学刚.jpg", detail: "详细-35.jpg", link: "/vips/3" },
  { name: "令狐恩强", img: "4令狐恩强.jpg", detail: "详细-36.jpg", link: "/vips/4" },
  { name: "刘凯", img: "5刘凯.jpg", detail: "详细-37.jpg", link: "/vips/5" },
  { name: "冀明", img: "6冀明.jpg", detail: "详细-38.jpg", link: "/vips/6" },
  { name: "麻树人", img: "7麻树人.jpg", detail: "详细-39.jpg", link: "/vips/7" },
  { name: "土屋 貴愛", img: "8土屋 貴愛.jpg", detail: "详细-40.jpg", link: "/vips/8" },
  { name: "李巍", img: "9李巍.jpg", detail: "详细-41.jpg", link: "/vips/9" },
  { name: "李文", img: "10李文.jpg", detail: "详细-42.jpg", link: "/vips/10" },
  { name: "李延青", img: "11李延青.jpg", detail: "详细-43.jpg", link: "/vips/11" },
  { name: "李兆申", img: "12李兆申.jpg", detail: "详细-44.jpg", link: "/vips/12" },
  { name: "席惠君", img: "13席惠君.jpg", detail: "详细-45.jpg", link: "/vips/13" },
  { name: "于君", img: "14于君.jpg", detail: "详细-46.jpg", link: "/vips/14" },
  { name: "于涛", img: "15于涛.jpg", detail: "详细-47.jpg", link: "/vips/15" },
  { name: "张澍田", img: "16张澍田.jpg", detail: "详细-48.jpg", link: "/vips/16" },
  { name: "张筱凤", img: "17张筱凤.jpg", detail: "详细-49.jpg", link: "/vips/17" }
];

const nurses = [
  { name: "方英", img: "1方英.png", detail: "1.png", link: "/nurses/1" },
  { name: "韦键", img: "2韦键.png", detail: "2.png", link: "/nurses/2" },
  { name: "糜琛蓉", img: "3糜琛蓉.png", detail: "3.png", link: "/nurses/3" },
  { name: "甘和平", img: "4甘和平.png", detail: "4.png", link: "/nurses/4" },
  { name: "王萍", img: "5王萍.png", detail: "5.png", link: "/nurses/5" },
  { name: "席惠君", img: "6席惠君.png", detail: "6.png", link: "/nurses/6" }
];

const locations = {
  location : 'http://api.map.baidu.com/geocoder?address=上海瑞金医院&output=html',
  image : 'http://api.map.baidu.com/staticimage/v2?ak=EFjt6oKsiZ1lejOMPCQnE0DA&center=121.472905,31.21648&width=400&height=420&zoom=18&copyright=1&markers=上海瑞金医院'
};


const menus = [
  { link : '/introduction', view: 'introduction', text : '论坛介绍' },
  { link : '/vips', view : 'vips/index', text : 'VIP专家介绍', model: vips },
  { link : '/nurses', view : 'nurses/index', text : '护理专家', model: nurses },
  { link : '/participants', view : 'participants', text : '参会人员' },
  { link : '/agenda', view : 'agenda', text : '大会日程' },
  { link : '/location', view : 'location', text : '地图导航', model : locations },
  { link : '/contact', view : 'contact', text : '联络我们' }
];


router.get('/', function(req, res) {
  res.render('index', {
    title : '肝胆胰疾病内镜诊疗高峰论坛',
    style : 'home',
    model : menus
  });
});

menus.forEach(function(m) {
  router.get(m.link, function(req, res) {
    res.render(m.view, {
      title : m.text,
      model : m.model
    });
  });
});

const DETAILS = [
  { path : '/vips/:id', view : 'vips/vip', data : vips},
  { path : '/nurses/:id', view : 'nurses/nurse', data : nurses}
];

DETAILS.forEach(function(d) {
  router.get(d.path, function(req, res) {
    var index = parseInt(req.params.id);
    var n =　d.data[index - 1];
    if (n) {
      res.render(d.view, {
        title : n.name,
        detail : n.detail
      });
    } else {
      res.status(404);
    }
  });
})


module.exports = router;
