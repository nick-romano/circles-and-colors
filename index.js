import _ from 'lodash';
import * as d3 from "d3";

function component() {
    var element = document.createElement('p');
  	return element;
}

function circle(){
	var circle = document.createElement('circle')
	return circle
}

// // Update…
// var p = d3.select("body")
//   .selectAll("p")
//   .data([4, 8, 15, 16, 23, 42])
//     .text(function(d) { return d; });

// // Enter…
// p.enter().append("p")
//     .text(function(d) { return d + 1; });

// // Exit…
// p.exit().remove();

document.body.appendChild(component());
d3.select('body')
	.append('svg')
		.style('width', 800)
		.style('height', 800)

d3.select('svg').append('circle')

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
	var c = d3.selectAll('svg')
			.selectAll('circle')
			.data(RandomList)
			  .attr('r', function(d){ return d*.25})
			  .attr('cx', 800)
			  .attr('cy', 800)
			  .attr('fill', 'red')
	
	c.enter().append('circle')
		.attr('r', function(d){ return d*.25})
		.attr('cx', function(d){ return 400})
		.attr('cy', function(d){ return d * 15})
		.attr('fill', function(d){return getRandomColor()})
	c.exit().remove();
};



addCircles(1000)

//setTimeout(function(){addCircles(100)}, 10000)



 d3.selectAll("circle").transition()
     .duration(2000)
     .delay(function(d, i) { return i * 10; })
     .attr("r", function(d) { return Math.sqrt(d * 1000)});

setTimeout(function(){
 setInterval(
 	function(){
 		 d3.selectAll("circle").transition()
 		.duration(1000)
 		.delay(function(d, i) {return i * 25})
 		.attr('cx', function(d){return d })
 	}, 1000)

setInterval(
	function(){
		 d3.selectAll("circle").transition()
		.duration(1000)
		.delay(function(d, i) {return i * 25})
		.attr('cx', function(d){return (d * 25)})
	}, 2000)
},10000)


setTimeout(function(){
	d3.select("body").transition()
		.style("background-color", '#d3d3d3')
}, 200)


