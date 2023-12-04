// Daily Traffic Dashboards Default

export const barChartDataDailyTraffic = [
	{
		name: 'Daily Traffic',
		data: [ 20, 30, 40, 20, 45, 50, 30 ]
	}
];

export const barChartOptionsDailyTraffic: any = {
	chart: {
		toolbar: {
			show: false
		}
	},
	tooltip: {
		style: {
			fontSize: '12px',
			fontFamily: undefined
		},
		onDatasetHover: {
			style: {
				fontSize: '12px',
				fontFamily: undefined
			}
		},
		theme: 'dark'
	},
	xaxis: {
		categories: [ '00', '04', '08', '12', '14', '16', '18' ],
		show: false,
		labels: {
			show: true,
			style: {
				colors: '#A3AED0',
				fontSize: '14px',
				fontWeight: '500'
			}
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
	},
	yaxis: {
		show: false,
		color: 'black',
		labels: {
			show: true,
			style: {
				colors: '#CBD5E0',
				fontSize: '14px'
			}
		}
	},
	grid: {
		show: false,
		strokeDashArray: 5,
		yaxis: {
			lines: {
				show: true
			}
		},
		xaxis: {
			lines: {
				show: false
			}
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			type: 'vertical',
			shadeIntensity: 1,
			opacityFrom: 0.7,
			opacityTo: 0.9,
			colorStops: [
				[
					{
						offset: 0,
						color: '#4318FF',
						opacity: 1
					},
					{
						offset: 100,
						color: 'rgba(67, 24, 255, 1)',
						opacity: 0.28
					}
				]
			]
		}
	},
	dataLabels: {
		enabled: false
	},
	plotOptions: {
		bar: {
			borderRadius: 10,
			columnWidth: '40px'
		}
	}
};

export const barChartDataUserActivity = [
	{
		name: 'PRODUCT A',
		data: [ 70, 55, 41, 67, 22, 43 ]
	},
	{
		name: 'PRODUCT B',
		data: [ 90, 70, 60, 50, 80, 90 ]
	}
];

// User Activity

export const barChartOptionsUserActivity = {
	chart: {
		stacked: true,
		toolbar: {
			show: false
		}
	},
	tooltip: {
		style: {
			fontSize: '12px'
		},
		onDatasetHover: {
			style: {
				fontSize: '12px'
			}
		},
		theme: 'dark'
	},
	xaxis: {
		categories: [ 'S', 'M', 'T', 'W', 'T', 'F' ],
		show: false,
		labels: {
			show: true,
			style: {
				colors: '#A3AED0',
				fontSize: '14px',
				fontWeight: '500'
			}
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
	},
	yaxis: {
		show: true,
		color: 'black',
		labels: {
			show: true,
			style: {
				colors: '#A3AED0',
				fontSize: '14px',
				fontWeight: '500'
			}
		}
	},

	grid: {
		borderColor: 'rgba(163, 174, 208, 0.3)',
		show: true,
		yaxis: {
			lines: {
				show: true,
				opacity: 0.5
			}
		},
		row: {
			opacity: 0.5
		},
		xaxis: {
			lines: {
				show: false
			}
		}
	},
	fill: {
		type: 'solid',
		colors: [ '#5E37FF', '#6AD2FF' ]
	},
	legend: {
		show: false
	},
	colors: [ '#5E37FF', '#6AD2FF' ],
	dataLabels: {
		enabled: false
	},
	plotOptions: {
		bar: {
			borderRadius: 10,
			columnWidth: '30px'
		}
	}
};
// Consumption Users Reports

export const barChartDataConsumption = [
	{
		name: 'PRODUCT A',
		data: [ 400, 370, 330, 390, 320, 350, 360, 320, 380 ]
	},
	{
		name: 'PRODUCT B',
		data: [ 400, 370, 330, 390, 320, 350, 360, 320, 380 ]
	},
	{
		name: 'PRODUCT C',
		data: [ 400, 370, 330, 390, 320, 350, 360, 320, 380 ]
	}
];

export const barChartOptionsConsumption: any = {
	chart: {
		stacked: true,
		toolbar: {
			show: false
		}
	},
	tooltip: {
		style: {
			fontSize: '12px',
			fontFamily: undefined
		},
		onDatasetHover: {
			style: {
				fontSize: '12px',
				fontFamily: undefined
			}
		},
		theme: 'dark'
	},
	xaxis: {
		categories: [ '17', '18', '19', '20', '21', '22', '23', '24', '25' ],
		show: false,
		labels: {
			show: true,
			style: {
				colors: '#A3AED0',
				fontSize: '14px',
				fontWeight: '500'
			}
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
	},
	yaxis: {
		show: false,
		color: 'black',
		labels: {
			show: false,
			style: {
				colors: '#A3AED0',
				fontSize: '14px',
				fontWeight: '500'
			}
		}
	},

	grid: {
		borderColor: 'rgba(163, 174, 208, 0.3)',
		show: true,
		yaxis: {
			lines: {
				show: false,
				opacity: 0.5
			}
		},
		row: {
			opacity: 0.5
		},
		xaxis: {
			lines: {
				show: false
			}
		}
	},
	fill: {
		type: 'solid',
		colors: [ '#5E37FF', '#6AD2FF', '#E1E9F8' ]
	},
	legend: {
		show: false
	},
	colors: [ '#5E37FF', '#6AD2FF', '#E1E9F8' ],
	dataLabels: {
		enabled: false
	},
	plotOptions: {
		bar: {
			borderRadius: 10,
			columnWidth: '20px'
		}
	}
};

export const pieChartOptions: any = {
	labels: [ 'Your files', 'System', 'Empty' ],
	colors: [ '#4318FF', '#6AD2FF', '#EFF4FB' ],
	chart: {
		width: '50px'
	},
	states: {
		hover: {
			filter: {
				type: 'none'
			}
		}
	},
	legend: {
		show: false
	},
	dataLabels: {
		enabled: false
	},
	hover: { mode: null },
	plotOptions: {
		donut: {
			expandOnClick: false,
			donut: {
				labels: {
					show: false
				}
			}
		}
	},
	fill: {
		colors: [ '#4318FF', '#6AD2FF', '#EFF4FB' ]
	},
	tooltip: {
		enabled: true,
		theme: 'dark'
	}
};

export const pieChartData = [ 63, 25, 12 ];

// Total Spent Default

export const lineChartDataTotalSpent = [
	{
		name: 'Massa',
		data: [  0, 0,  0, 10, 18, 28, 34, 38, 48, 48, 54, 54, 64, 74, 77, 77, 79, 87, 97]
	},
	{
		name: 'Hamilton',
		data: [ 0, 10, 14, 14, 20, 28, 38, 38, 38, 48, 58, 62, 70, 76, 78, 84, 84, 94, 98]
	}
];

export const defautOptionsLine: any = {
	chart: {
		toolbar: {
			show: true
		},
		dropShadow: {
			enabled: true,
			top: 13,
			left: 0,
			blur: 10,
			opacity: 0.1,
			color: '#000'
		}
	},	
	tooltip: {
		theme: 'dark-dual',
		style: {
			color: '#000', 
		  },
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: 'smooth',
		type: 'line'
	},
	xaxis: {
		type: 'numeric',
		categories: [],
		labels: {
			style: {
				colors: '#fff',
				fontSize: '12px',
				fontWeight: '500'
			}
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
	},
	yaxis: {
		show: true
	},
	legend: {
		show: false
	},
	grid: {
		show: true,
		column: {
			color: [ '#7551FF', '#39B8FF' ],
			opacity: 0.5
		}
	}
};
