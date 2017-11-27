import _ from 'lodash';
import * as d3 from "d3";
const simpleSlider = require('d3-simple-slider').sliderHorizontal;
require('expose-loader?d3!d3');

d3.sliderHorizontal = simpleSlider;

d3.select('body')
	.append('div')
	.style('margin-top', '100px')
	.attr('id', 'contain')

d3.select('#contain')
	.append('svg')
		.style('width', window.innerWidth)
		.style('height', window.innerHeight - 110)

d3.select('#contain svg').append('circle')
	.attr('fill', 'transparent')


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addCircles(num){
	var RandomList = [];
	for(var i = 0; i < num; i++){
		RandomList.push((Math.random()*20).toFixed(0) * 1.5)
	}
	//console.log(list)
	//var e = [4,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
	var c = d3.selectAll('#contain svg')
			.selectAll('circle')
			.data(RandomList)
	
	c.enter().append('circle')
		.attr('r', function(d){ return d*.25})
		.attr('cx', function(d){ return window.innerWidth/2})
		.attr('cy', function(d){ return d * 25})
		.attr('fill', function(d){return getRandomColor()})
	c.exit().remove();
 	d3.selectAll("circle").transition()
     	.duration(2000)
     	.delay(function(d, i) { return i * 10; })
     	.attr("r", function(d) { return Math.sqrt(d * 1000)});
};



//addCircles(1000)

function changeNum(e){
	var c = d3.select('svg')
		.selectAll('circle')
		.remove();
	d3.select('svg').append('circle');
	addCircles(e);
}



// setTimeout(function(){
//  setInterval(
//  	function(){
//  		 d3.selectAll("circle").transition()
//  		.duration(1000)
//  		.delay(function(d, i) {return i * 25})
//  		.attr('cx', function(d){return d })
//  	}, 1000)

// setInterval(
// 	function(){
// 		 d3.selectAll("circle").transition()
// 		.duration(1000)
// 		.delay(function(d, i) {return i * 25})
// 		.attr('cx', function(d){return (d * 25)})
// 	}, 2000)
// },10000)


setTimeout(function(){
	d3.select("body").transition()
		.style("background-color", '#d3d3d3')
}, 200)

d3.select('body')
	.append('p')
	.attr('id', 'value')
d3.select('body')
	.append('div')
	.attr('id', 'slider')
	.style('position', 'absolute')
	.style('top', '5px')
	.style('left', '50%')
	.style('transform', 'translate(-35%)')

 var slider = d3.sliderHorizontal()
    .min(0)
    .max(1000)
    .step(1)
    .width(300)
    .displayValue(false)
    .on('onchange', val => {
      //d3.select("#value").text(val);
      addCircles(val)
    });

  d3.select("#slider").append("svg")
    .attr("width", 500)
    .attr("height", 100)
    .append("g")
    .attr("transform", "translate(30,30)")
    .call(slider)

