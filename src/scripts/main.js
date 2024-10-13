'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');

const coordWall = wall.getBoundingClientRect();
const coordSpider = spider.getBoundingClientRect();

spider.style.left = coordWall.width / 2 - coordSpider.width / 2 + 'px';
spider.style.top = coordWall.height / 2 - coordSpider.height / 2 + 'px';
