/**
 * Use the D3 library to read in samples.json from the URL
 */

let url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json'

d3.json(url).then(d=>{
    // console.log(d)
    
    let names = []
    let values = []
    let labels = []
    let samples = d.samples
    let user_id = "940"
    samples = samples.filter(d => d.id == user_id)[0]
    console.log(samples)
    names = samples.otu_ids.slice(0,10)
    values = samples.sample_values.slice(0,10)
    labels = samples.otu_labels.slice(0,10)
    // //or (let  i = 0; i < d.samples.length; i++) {

    //   //  let data_i = d.samples[i]

    //     //console.log(data_i)

    //     names.push(data_i.otu_ids)
    //     values.push(data_i.sample_values)

    //     //row.append('td').text(data_i.samples.capsule_serial)
    //     //row.append('td').text(data_i.samples.details)

    // }

    // console.log(names)

    let trace1 = {
        x: names,
        y: values,
        text : labels,
        type: 'bar'
    }
    
    let traceData = [trace1]
    
    let layout = {
        title: '1st plot'
    }
    
    Plotly.newPlot('bar', traceData, layout)
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


