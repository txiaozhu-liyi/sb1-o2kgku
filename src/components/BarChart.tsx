import React, { useEffect, useRef } from 'react';

class BarChart {
  constructor(elementId, data) {
    this.elementId = elementId;
    this.data = data;
    this.init();
  }

  init() {
    const container = document.getElementById(this.elementId);

    // Create a canvas element
    const canvas = document.createElement("canvas");
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    container.appendChild(canvas);

    // Get the canvas context and set styles
    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#333";
    ctx.lineWidth = 1;

    // Define the dimensions of the chart
    const chartWidth = canvas.width - 50;
    const chartHeight = canvas.height - 50;

    // Calculate the maximum value in the data
    const maxValue = Math.max(...this.data.map(item => item.value));

    // Define the gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, chartHeight);
    gradient.addColorStop(0, "rgba(0, 128, 0, 1)");
    gradient.addColorStop(1, "rgba(0, 255, 0, 1)");

    // Draw the bars
    this.data.forEach((item, index) => {
      const barWidth = 40;
      const x = index * 60 + 50;
      let y = chartHeight + 25;

      // Animate the bar from bottom to top
      const animate = () => {
        y -= 5;
        const barHeight = (chartHeight + 25) - y;

        if (barHeight < item.value / maxValue * chartHeight) {
          requestAnimationFrame(animate);
        }

        // Draw the front face of the bar
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + barWidth, y);
        ctx.lineTo(x + barWidth, y + barHeight);
        ctx.lineTo(x, y + barHeight);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw the top face of the bar
        ctx.fillStyle = "rgba(0, 255, 0, 0.8)";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + 10, y - 10);
        ctx.lineTo(x + barWidth + 10, y - 10);
        ctx.lineTo(x + barWidth, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Draw the right face of the bar
        ctx.strokeStyle = "#333";
        ctx.beginPath();
        ctx.moveTo(x + barWidth, y);
        ctx.lineTo(x + barWidth + 10, y - 10);
        ctx.lineTo(x + barWidth + 10, y - 10 + barHeight);
        ctx.lineTo(x + barWidth, y + barHeight);
        ctx.closePath();
        ctx.stroke();

        // Draw the data label on the bar
        ctx.fillStyle = "#333";
        ctx.font = "12px Arial";
        ctx.textAlign = "center";
        ctx.fillText(item.value, x + barWidth / 2, y + barHeight / 2);
      };

      animate();
    });

    // Draw x-axis
    ctx.beginPath();
    ctx.moveTo(40, chartHeight + 25);
    ctx.lineTo(chartWidth + 50, chartHeight + 25);
    ctx.stroke();

    // Draw y-axis
    ctx.beginPath();
    ctx.moveTo(40, 25);
    ctx.lineTo(40, chartHeight + 25);
    ctx.stroke();

    // Draw y-axis labels and grid lines
    for (let i = 0; i <= 5; i++) {
      const y = chartHeight + 25 - (i / 5) * chartHeight;
      const value = Math.round((i / 5) * maxValue);
      
      // Draw grid line
      ctx.beginPath();
      ctx.moveTo(40, y);
      ctx.lineTo(chartWidth + 50, y);
      ctx.strokeStyle = "#e0e0e0";
      ctx.stroke();

      // Draw label
      ctx.fillStyle = "#333";
      ctx.font = "12px Arial";
      ctx.textAlign = "right";
      ctx.fillText(value.toString(), 35, y + 5);
    }

    // Draw x-axis labels
    this.data.forEach((item, index) => {
      const x = index * 60 + 70;
      ctx.fillStyle = "#333";
      ctx.font = "12px Arial";
      ctx.textAlign = "center";
      ctx.fillText(item.label, x, chartHeight + 40);
    });
  }
}

const BarChartComponent = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const data = [
        { label: "Jan", value: 50 },
        { label: "Feb", value: 70 },
        { label: "Mar", value: 90 },
        { label: "Apr", value: 60 },
        { label: "May", value: 80 },
        { label: "Jun", value: 40 },
        { label: "Jul", value: 70 },
      ];
      new BarChart(chartRef.current.id, data);
    }
  }, []);

  return <div id="chart-container" ref={chartRef} className="w-full h-full"></div>;
};

export default BarChartComponent;