/**
 * Use the D3 library to read in samples.json from the URL
 */

let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

let names = []
let values = []

d3.json(url).then(d=>{
    console.log(d)

    for (let  i = 0; i < d.length; i++) {
        
        let data_i = d[i]

        //console.log(data_i)

        names.push(data_i.samples.otu_ids)
        values.push(data_i.samples.sample_values)

        //row.append('td').text(data_i.samples.capsule_serial)
        //row.append('td').text(data_i.samples.details)

    }

    d3
    .select('ul')          // Select the HTML tag 'body'
    .selectAll('li')          // Select 'imaginary' paragraphs
    .data(d)                 // bind the data (d) to those imaginary p-tags
    .enter()                 // select the imaginary paragraphs...
    .append('li')             // for each imaginary paragraphs.. apend one -> insert one paragraph per data entry
    .text(d=>d.samples.otu_ids)    // add text to each paragraph, the text comes out of each 'full_name' of each data entry

})

/**
 * Create a horizontal bar chart with a dropdown 
 * menu to display the top 10 OTUs found in that individual.
 * Use sample_values as the values for the bar chart.
 * Use otu_ids as the labels for the bar chart.
 * Use otu_labels as the hovertext for the chart.
 */

//let names = samples.map(d => data_i.samples.otu_ids)
//let values = samples.map(d => data_i.samples.sample_values)

let trace1 = {
    x: names,
    y: values,
    type: 'bar'
}

let traceData = [trace1]

let layout = {
    title: '1st plot'
}

Plotly.newPlot('bar', traceData, layout)
