;(function() {
  d3.select('.fa-angellist')
    .on('mouseover', function() {
      d3.select('#about')
        .style('visibility', 'visible')
        .style('height', 'auto')
    })
    .on('mouseout', function() {
      d3.select('#about')
        .style('visibility', 'collapse')
        .style('height', 0)
    })

  // d3.select('#nbc').on('mouseover', function() {
  //   d3.select('#nbc-clips').style('display', 'inline-block')
  // })

  // d3.select('#nbc-close').on('click', function() {
  //   d3.select('#nbc-clips').style('display', 'none')
  // // })

  // d3.select('#nbcProj').on('mouseover', function() {
  //   d3.selectAll('.column').style('visibility', 'collapse')
  // })

  // d3.select('#sideProj').on('mouseover', function() {
  //   console.log('hi')
  //   d3.selectAll('.nbc')
  //     .style('visibility', 'collapse')
  //     .style('height', 0)
  // })
})()
