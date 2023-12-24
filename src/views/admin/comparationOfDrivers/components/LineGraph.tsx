import React, { useState } from 'react';
import {
  Box,
  Input,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import LineChart from 'components/charts/LineChart';

import {
  DataGraphic,
  OptionsLine,
} from './Interfaces';
import { title } from 'process';

export default function Default(props: {
  chartData: DataGraphic[];
  chartOptions: OptionsLine;
  chartLabel: string[];
  dataLoaded: boolean;
}) {
  const [chartTitle, setChartTitle] = useState('F1 Graphics');
  const [chartYaxisTitle, setChartYaxisTitle] = useState('Drivers');
  const [chartTitleColor, setChartTitleColor] = useState('#fff');
  const [chartLabelColor, setChartLabelColor] = useState('#fff');
  const [chartYaxisColor, setChartYaxisColor] = useState('#fff');

  const optionsLine: any = {
    chart: {
      toolbar: {
        show: props.chartOptions.chart.toolbar.show
      },
      dropShadow: props.chartOptions.chart.dropShadow
    },
    title: {
      text: chartTitle,
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: undefined,
        color: chartTitleColor
      }
    },
    tooltip: props.chartOptions.tooltip,
    dataLabels: props.chartOptions.dataLabels,
    stroke: {
      curve: 'smooth',
      type: 'line'
    },
    xaxis: {
      type: 'numeric',
      categories: props.chartLabel,
      labels: {
        style: {
          colors: chartLabelColor,
          fontSize: '13px',
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
      title: {
        text: chartYaxisTitle,
        style: {
          fontSize: '16px',
          color: chartYaxisColor
        }
      }
    },
    legend: {
      show: false
    },
    grid: {
      show: true,
      column: {
        color: ['#7551FF', '#39B8FF'],
        opacity: 0.5
      }
    }
  };

  console.log(props.chartLabel);

  return (
    <>
      <Grid templateColumns="3fr 1fr" gap={4}>
        <GridItem>
          <FormControl>
            <Input
              type="text"
              value={chartTitle}
              onChange={(e) => setChartTitle(e.target.value)}
              placeholder="Enter chart title"
            />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl>
            <Input
              type="color"
              value={chartTitleColor}
              onChange={(e) => setChartTitleColor(e.target.value)}
              w="30%"
            />
          </FormControl>
        </GridItem>
      </Grid>

      <Grid templateColumns="2fr 1fr 1fr" gap={4}>
        <GridItem>
          <FormControl>
            <FormLabel>Yaxis Title</FormLabel>
            <Input
              type="text"
              value={chartYaxisTitle}
              onChange={(e) => setChartYaxisTitle(e.target.value)}
              placeholder="Enter chart Yaxis title"
            />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl>
          <FormLabel>Yaxis Color</FormLabel>
            <Input
              type="color"
              value={chartYaxisColor}
              onChange={(e) => setChartYaxisColor(e.target.value)}
              w="30%"
            />
          </FormControl>
        </GridItem>

        <GridItem>
          <FormControl>
          <FormLabel>Label Color</FormLabel>
            <Input
              type="color"
              value={chartLabelColor}
              onChange={(e) => setChartLabelColor(e.target.value)}
              w="30%"
            />
          </FormControl>
        </GridItem>
      </Grid>

      <Box minH='400px' minW='95%' mt='auto'>
        {props.dataLoaded && <LineChart chartData={props.chartData} chartOptions={optionsLine} />}
      </Box>
    </>
  );
}
