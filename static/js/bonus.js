 // Update the gauge chart
 function buildGaugeChart(washingFrequency) {
    var gaugeData = [
      {
        domain: { x: [0, 1], y: [0, 1] },
        value: washingFrequency,
        title: { text: "Weekly Washing Frequency" },
        type: "indicator",
        mode: "gauge+number",
        gauge: {
          axis: { range: [null, 9] },
          steps: [
            { range: [0, 1], color: "F1F0E8" },
            { range: [1, 2], color: "#EADBC8" },
            { range: [2, 3], color: "#E9EDC9" },
            { range: [3, 4], color: "#DBDFAA" },
            { range: [4, 5], color: "#B3C890" },
            { range: [5, 6], color: "#ABC270" },
            { range: [6, 7], color: "#8EAC50" },
            { range: [7, 8], color: "#7A9D54" },
            { range: [8, 9], color: "#557A46" }
          ],
          threshold: {
            line: { color: "#820000", width: 4 },
            thickness: 0.75,
            value: washingFrequency
          }
        }
      }
    ];
  
    var gaugeLayout = { width: 500, height: 400, margin: { t: 0, b: 0 } };
  
    Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  }