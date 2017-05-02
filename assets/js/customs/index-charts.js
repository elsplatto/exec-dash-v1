$(function(){
	var basePointChange = 0;

	var marginHeroChart = new Chartist.Line('#marginWBGChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wbg',
	    data: [-0.08, -0.4, 0, -0.2, 0.31, 0.75, 1, 1.02, 0.89, 1.02, 1.04, 1.09]
	  }]
	}, {
	  fullWidth: true,
	  height: '100%',
	  // Within the series options you can use the series names
	  // to specify configuration that will only be used for the
	  // specific series.
	  series: {		    
	    'wbg': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1

	  // ,
	  // plugins: [
	  //   Chartist.plugins.ctThreshold({
	  //     threshold: 1
	  //   })
	  // ]

	}, [
	  // You can even use responsive configuration overrides to
	  // customize your series configuration even further!
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wbg': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(marginHeroChart);

	$('#marginHeroIndex').text(getLastIndex(marginHeroChart));

	$('#marginHeroChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#marginHeroChangeIndicator').addClass('symbol-triangle')
	}
	else if (basePointChange < 0) {
		$('#marginHeroChangeIndicator').addClass('symbol-triangle dir-down')
	}

	// $('#marginHeroChangeText').text(Number(marginHeroChart.data.series[0].data[marginHeroChart.data.series[0].data.length-1] - marginHeroChart.data.series[0].data[marginHeroChart.data.series[0].data.length-2]) + ' bps');

	var marginCBChart = new Chartist.Line('#marginCBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'cb',
	    data: [0.08, 0.4, 0, -0.2, 0.31, 0.75, 1, 1.02, 0.89, 0.95, 0.94, 0.99]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'cb': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'cb': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(marginCBChart);

	$('#marginCBIndex').text(getLastIndex(marginCBChart));

	$('#marginCBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#marginCBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#marginCBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var marginBBChart = new Chartist.Line('#marginBBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'bb',
	    data: [-0.7, -1, -0.5, -0.6, 2, 1, -0.05, -2, 0, 1.8, 0.4, 0.19]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'bb': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'bb': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(marginBBChart);

	$('#marginBBIndex').text(getLastIndex(marginBBChart));

	$('#marginBBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#marginBBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#marginBBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var marginWIBChart = new Chartist.Line('#marginWIBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wib',
	    data: [-0.7, -1, -0.5, -0.6, 2, 1, -0.05, -2, 0, 1.8, 0.4, 0.49]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'wib': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wib': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(marginWIBChart);

	$('#marginWIBIndex').text(getLastIndex(marginWIBChart));

	$('#marginWIBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#marginWIBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#marginWIBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var marginBTChart = new Chartist.Line('#marginBTChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'bt',
	    data: [0.7, 1, -0.5, -0.6, 0, 0.6, -0.15, -0.3, 0, 1.28, 0.5, 0.32]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'bt': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'bt': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(marginBTChart);

	$('#marginBTIndex').text(getLastIndex(marginBTChart));

	$('#marginBTChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#marginBTChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#marginBTChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var marginWNZChart = new Chartist.Line('#marginWNZChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wnz',
	    data: [1.7, 1, -0.02, -0.6, 0, 0.6, -0.15, 0.3, 0, 0.28, 1.25, 1.32]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'wnz': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wnz': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(marginWNZChart);

	$('#marginWNZIndex').text(getLastIndex(marginWNZChart));

	$('#marginWNZChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#marginWNZChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#marginWNZChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var marginGBUChart = new Chartist.Line('#marginGBUChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'gbu',
	    data: [1.7, 1, -0.02, -0.6, 0, 0.16, -0.15, 0.3, 0, 0.28, 1.35, 1.39]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'gbu': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'gbu': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(marginGBUChart);

	$('#marginGBUIndex').text(getLastIndex(marginGBUChart));

	$('#marginGBUChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#marginGBUChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#marginGBUChangeIndicator').addClass('symbol-triangle dir-down');
	}		
});

$(function(){
	var basePointChange = 0;

	var roeHeroChart = new Chartist.Line('#roeWBGChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wbg',
	    data: [1.08, 1.04, 0, -0.2, -0.31, -0.55, -0.22, -0.02, 0.89, 1.02, 0.43, 0.55]
	  }]
	}, {
	  fullWidth: true,
	  height: '100%',
	  // Within the series options you can use the series names
	  // to specify configuration that will only be used for the
	  // specific series.
	  series: {		    
	    'wbg': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1

	  // ,
	  // plugins: [
	  //   Chartist.plugins.ctThreshold({
	  //     threshold: 1
	  //   })
	  // ]

	}, [
	  // You can even use responsive configuration overrides to
	  // customize your series configuration even further!
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wbg': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(roeHeroChart);

	$('#roeHeroIndex').text(getLastIndex(roeHeroChart));

	$('#roeHeroChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#roeHeroChangeIndicator').addClass('symbol-triangle')
	}
	else if (basePointChange < 0) {
		$('#roeHeroChangeIndicator').addClass('symbol-triangle dir-down')
	}

	
	var roeCBChart = new Chartist.Line('#roeCBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'cb',
	    data: [1.7, 1, -0.02, -0.6, 0, 0.16, -0.15, 0.3, 0, 0.28, 1.35, 1.39]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'cb': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'cb': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(roeCBChart);

	$('#roeCBIndex').text(getLastIndex(roeCBChart));

	$('#roeCBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#roeCBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#roeCBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var roeBBChart = new Chartist.Line('#roeBBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'bb',
	    data: [0.08, 0.4, 0, -0.2, 0.31, 0.75, 1, 1.02, 0.89, 0.95, 0.94, 0.99]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'bb': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'bb': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(roeBBChart);

	$('#roeBBIndex').text(getLastIndex(roeBBChart));

	$('#roeBBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#roeBBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#roeBBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var roeWIBChart = new Chartist.Line('#roeWIBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wib',
	    data: [-0.7, -1, -0.5, -0.6, 2, 1, -0.05, -2, 0, 1.8, 0.4, 0.19]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'wib': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wib': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(roeWIBChart);

	$('#roeWIBIndex').text(getLastIndex(roeWIBChart));

	$('#roeWIBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#roeWIBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#roeWIBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var roeBTChart = new Chartist.Line('#roeBTChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'bt',
	    data: [-0.7, -1, -0.5, -0.6, 2, 1, -0.05, -2, 0, 1.8, 0.4, 0.49]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'bt': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'bt': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(roeBTChart);

	$('#roeBTIndex').text(getLastIndex(roeBTChart));

	$('#roeBTChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#roeBTChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#roeBTChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var roeWNZChart = new Chartist.Line('#roeWNZChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wnz',
	    data: [0.7, 1, -0.5, -0.6, 0, 0.6, -0.15, -0.3, 0, 1.28, 0.5, 0.32]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'wnz': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wnz': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(roeWNZChart);

	$('#roeWNZIndex').text(getLastIndex(roeWNZChart));

	$('#roeWNZChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#roeWNZChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#roeWNZChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var roeGBUChart = new Chartist.Line('#roeGBUChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'gbu',
	    data: [1.7, 1, -0.02, -0.6, 0, 0.6, -0.15, 0.3, 0, 0.28, 1.25, 1.32]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'gbu': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'gbu': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(roeGBUChart);

	$('#roeGBUIndex').text(getLastIndex(roeGBUChart));

	$('#roeGBUChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#roeGBUChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#roeGBUChangeIndicator').addClass('symbol-triangle dir-down');
	}		
});

$(function(){
	var basePointChange = 0;

	var cashEarningsHeroChart = new Chartist.Line('#cashEarningsWBGChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wbg',
	    data: [1.7, 1, -0.02, -0.6, 0, 0.6, -0.15, 0.3, 0, 0.28, 1.25, 1.32]
	  }]
	}, {
	  fullWidth: true,
	  height: '100%',
	  // Within the series options you can use the series names
	  // to specify configuration that will only be used for the
	  // specific series.
	  series: {		    
	    'wbg': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1

	  // ,
	  // plugins: [
	  //   Chartist.plugins.ctThreshold({
	  //     threshold: 1
	  //   })
	  // ]

	}, [
	  // You can even use responsive configuration overrides to
	  // customize your series configuration even further!
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wbg': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(cashEarningsHeroChart);

	$('#cashEarningsHeroIndex').text(getLastIndex(cashEarningsHeroChart));

	$('#cashEarningsHeroChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#cashEarningsHeroChangeIndicator').addClass('symbol-triangle')
	}
	else if (basePointChange < 0) {
		$('#cashEarningsHeroChangeIndicator').addClass('symbol-triangle dir-down')
	}

	
	var cashEarningsCBChart = new Chartist.Line('#cashEarningsCBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'cb',
	    data: [1.08, 1.04, 0, -0.2, -0.31, -0.55, -0.22, -0.02, 0.89, 1.02, 0.43, 0.55]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'cb': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'cb': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(cashEarningsCBChart);

	$('#cashEarningsCBIndex').text(getLastIndex(cashEarningsCBChart));

	$('#cashEarningsCBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#cashEarningsCBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#cashEarningsCBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var cashEarningsBBChart = new Chartist.Line('#cashEarningsBBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'bb',
	    data: [1.7, 1, -0.02, -0.6, 0, 0.16, -0.15, 0.3, 0, 0.28, 1.35, 1.39]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'bb': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'bb': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(cashEarningsBBChart);

	$('#cashEarningsBBIndex').text(getLastIndex(cashEarningsBBChart));

	$('#cashEarningsBBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#cashEarningsBBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#cashEarningsBBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var cashEarningsWIBChart = new Chartist.Line('#cashEarningsWIBChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wib',
	    data: [0.08, 0.4, 0, -0.2, 0.31, 0.75, 1, 1.02, 0.89, 0.95, 0.94, 0.99]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'wib': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wib': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(cashEarningsWIBChart);

	$('#cashEarningsWIBIndex').text(getLastIndex(cashEarningsWIBChart));

	$('#cashEarningsWIBChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#cashEarningsWIBChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#cashEarningsWIBChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var cashEarningsBTChart = new Chartist.Line('#cashEarningsBTChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'bt',
	    data: [-0.7, -1, -0.5, -0.6, 2, 1, -0.05, -2, 0, 1.8, 0.4, 0.19]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'bt': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'bt': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(cashEarningsBTChart);

	$('#cashEarningsBTIndex').text(getLastIndex(cashEarningsBTChart));

	$('#cashEarningsBTChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#cashEarningsBTChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#cashEarningsBTChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var cashEarningsWNZChart = new Chartist.Line('#cashEarningsWNZChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'wnz',
	    data: [-0.7, -1, -0.5, -0.6, 2, 1, -0.05, -2, 0, 1.8, 0.4, 0.49]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'wnz': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'wnz': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(cashEarningsWNZChart);

	$('#cashEarningsWNZIndex').text(getLastIndex(cashEarningsWNZChart));

	$('#cashEarningsWNZChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#cashEarningsWNZChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#cashEarningsWNZChangeIndicator').addClass('symbol-triangle dir-down');
	}

	var cashEarningsGBUChart = new Chartist.Line('#cashEarningsGBUChart', {
	  // Naming the series with the series object array notation
		labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
	  series: [{
	    name: 'gbu',
	    data: [0.7, 1, -0.5, -0.6, 0, 0.6, -0.15, -0.3, 0, 1.28, 0.5, 0.32]
	  }]
	}, {
	  fullWidth: true,
	  height: '60%',
	  series: {		    
	    'gbu': {
	      showPoint: false
	    }
	  },
	  axisX: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  axisY: {
	    showGrid: false,
	    showLabel: false,
	    offset: 0
	  },
	  chartPadding: 1
	}, [
	  ['screen and (max-width: 320px)', {
	    series: {
	      'gbu': {
	        lineSmooth: Chartist.Interpolation.none(),
	        showPoint: true
	      }
	    }
	  }]
	]);

	basePointChange = calculateBasePointChange(cashEarningsGBUChart);

	$('#cashEarningsGBUIndex').text(getLastIndex(cashEarningsGBUChart));

	$('#cashEarningsGBUChangeText').text(basePointChange + ' bps');

	if (basePointChange > 0) {
		$('#cashEarningsGBUChangeIndicator').addClass('symbol-triangle');
	}
	else if (basePointChange < 0) {
		$('#cashEarningsGBUChangeIndicator').addClass('symbol-triangle dir-down');
	}		
});


function calculateBasePointChange(obj) {
	var lastNumber = obj.data.series[0].data[obj.data.series[0].data.length-1];
	var secondLastNumber = obj.data.series[0].data[obj.data.series[0].data.length-2];

	return Math.round((lastNumber - secondLastNumber)*100);
}

function getLastIndex(obj) {
	var lastNumber = obj.data.series[0].data[obj.data.series[0].data.length-1];
	return lastNumber;
}