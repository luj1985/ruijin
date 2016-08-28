var express = require('express');
var router = express.Router();

const vips = [
  { name: "殿塚 亮祐", img: "1殿塚 亮祐.jpg", detail: "1.jpg" },
  { name: "龚彪", img: "2龚彪.jpg", detail: "2.jpg" },
  { name: "郭学刚", img: "3郭学刚.jpg", detail: "3.jpg" },
  { name: "令狐恩强", img: "4令狐恩强.jpg", detail: "4.jpg" },
//  { name: "刘凯", img: "5刘凯.jpg", detail: "详细-37.jpg" },
  { name: "冀明", img: "6冀明.jpg", detail: "5.jpg" },
//  { name: "麻树人", img: "7麻树人.jpg", detail: "详细-39.jpg" },
  { name: "土屋 貴愛", img: "8土屋 貴愛.jpg", detail: "6.jpg" },
//  { name: "李巍", img: "9李巍.jpg", detail: "详细-41.jpg" },
  { name: "李文", img: "10李文.jpg", detail: "7.jpg" },
  { name: "李延青", img: "11李延青.jpg", detail: "8.jpg" },
  { name: "李兆申", img: "12李兆申.jpg", detail: "9.jpg" },
//  { name: "席惠君", img: "13席惠君.jpg", detail: "详细-45.jpg" },
  { name: "于君", img: "14于君.jpg", detail: "10.jpg" },
  { name: "于涛", img: "15于涛.jpg", detail: "11.jpg" },
  { name: "张澍田", img: "16张澍田.jpg", detail: "12.jpg" },
  { name: "张筱凤", img: "17张筱凤.jpg", detail: "13.jpg" }
];

const nurses = [
  { name: "方英", img: "1方英.png", detail: "1.png" },
  { name: "韦键", img: "2韦键.png", detail: "2.png" },
  { name: "糜琛蓉", img: "3糜琛蓉.png", detail: "3.png" },
  { name: "甘和平", img: "4甘和平.png", detail: "4.png" },
  { name: "王萍", img: "5王萍.png", detail: "5.png" },
  { name: "席惠君", img: "6席惠君.png", detail: "6.png" },
  { name: "杨丽", img: "7杨丽.png", detail: "7.png"}
];

const locations = {
  location : 'http://api.map.baidu.com/geocoder?address=上海瑞金医院&output=html',
  image : '/img/location/location.jpg'
};

const photos = [
  { text : "8月26日", name: "8月26日", detail : [
    "0U4A5292.jpg", "0U4A5315.jpg", "0U4A5339.jpg", "0U4A5416.jpg", "DSC_4036.jpg", "DSC_4083.jpg", "DSC_4126.jpg", "DSC_4200.jpg", "DSC_4222.jpg",
    "0U4A5314.jpg", "0U4A5323.jpg", "0U4A5356.jpg", "DSC_4003.jpg", "DSC_4055.jpg", "DSC_4096.jpg", "DSC_4170.jpg", "DSC_4202.jpg", "DSC_4232.jpg"
  ] },
  { text : "8月27日", name: "8月27日", detail : [
    "0U4A5470.jpg",  "0U4A5508.jpg",  "0U4A5610.jpg",  "0U4A5896.jpg",  "IMG_9029.jpg",  "IMG_9161.jpg",  "IMG_9235.jpg",  "IMG_9384.jpg",  "IMG_9479.jpg",
    "0U4A5472.jpg",  "0U4A5591.jpg",  "0U4A5671.jpg",  "IMG_8897.jpg",  "IMG_9035.jpg",  "IMG_9192.jpg",  "IMG_9313.jpg",  "IMG_9405.jpg",
    "0U4A5494.jpg",  "0U4A5604.jpg",  "0U4A5882.jpg",  "IMG_8945.jpg",  "IMG_9142.jpg",  "IMG_9226.jpg",  "IMG_9337.jpg",  "IMG_9443.jpg"
  ] },
  { text : "8月28日", name: "8月28日", detail : [] }
]

const menus = [
  { link : '/introduction', view: 'introduction', text : '论坛介绍' },
  { link : '/nurses', view : 'nurses/index', text : '护理专家', model: nurses },
  { link : '/agenda', view : 'agenda', text : '大会日程' },
  { link : '/location', view : 'location', text : '地图导航', model : locations },
  { link : '/vips', view : 'vips/index', text : 'VIP专家介绍', model: vips },
  { link : '/participants', view : 'participants', text : '参会人员' },
  { link : '/photos', view : 'photos/index', text : '大会照片', model: photos },
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
  { path : '/vips/:id', view : 'vips/vip', data : vips },
  { path : '/nurses/:id', view : 'nurses/nurse', data : nurses },
  { path : '/photos/:id', view : 'photos/photo', data : photos}
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
