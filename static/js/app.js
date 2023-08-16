// Function to initialize the dashboard
let url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function init() {
    // Read in samples.json using D3
    d3.json(url).then((data) => {
      // Populate the dropdown menu with the individual IDs
      let dropdown = d3.select("#selDataset");
      data.names.forEach((name) => {
        dropdown.append("option").text(name).property("value", name);
      });
  
      // Display charts and metadata for the first individual
      let initialName = data.names[0];
      buildCharts(initialName);
      buildMetadata(initialName);
    });
  }
  
  // Function to build charts when a new sample is selected
  function optionchange(newName) {
    buildCharts(newName);
    buildMetadata(newName);
  }
  
  // Function to build the charts
  function buildCharts(sampleName) {
    d3.json(url).then((data) => {
      let samples = data.samples;
      let selectedSample = samples.find(sample => sample.id === sampleName);
      
     // Ordenar los datos de muestra de menor a mayor
        let sortedSampleValues = selectedSample.sample_values.slice(0, 10).sort((a, b) => a - b);
        let sortedOTUIds = selectedSample.otu_ids.slice(0, 10).sort((a, b) => a - b);
        let sortedOTULabels = selectedSample.otu_labels.slice(0, 10);

    // Crear el gráfico de barras ordenado
        let barData = [{
        type: "bar",
        x: sortedSampleValues,
        y: sortedOTUIds.map(id => `OTU ${id}`),
        text: sortedOTULabels,
        orientation: "h"
        }];
  
        let barLayout = {
        title: "Top 10 OTUs",
        xaxis: { title: "Sample Values" }
      };
  
      Plotly.newPlot("bar", barData, barLayout);
  
      // Build the bubble chart
      let bubbleData = [{
        x: selectedSample.otu_ids,
        y: selectedSample.sample_values,
        text: selectedSample.otu_labels,
        mode: "markers",
        marker: {
          size: selectedSample.sample_values,
          color: selectedSample.otu_ids,
          colorscale: "Earth"
        }
      }];
  
      let bubbleLayout = {
        title: "Belly Button Biodiversity",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "Sample Values" }
      };
  
      Plotly.newPlot("bubble", bubbleData, bubbleLayout);
    });
  }

  // Function to build the metadata
  function buildMetadata(sampleName) {
    d3.json(url).then((data) => {
      let metadata = data.metadata;
      let selectedMetadata = metadata.find(meta => meta.id.toString() === sampleName);

      let washingFrequency = selectedMetadata.wfreq;
      buildGaugeChart(washingFrequency);
  
      let metadataPanel = d3.select("#sample-metadata");
      metadataPanel.html(""); // Clear previous metadata
  
      // Display key-value pairs from metadata
      Object.entries(selectedMetadata).forEach(([key, value]) => {
        metadataPanel.append("p").text(`${key}: ${value}`);
      });
    });
  }
  
  // Initialize the dashboard
  init();
  