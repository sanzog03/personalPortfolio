import one from '../assets/svg/projects/one.svg'
import two from '../assets/svg/projects/two.svg'
import three from '../assets/svg/projects/three.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import eight from '../assets/svg/projects/eight.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'FCX Field Campaign Explorer',
        projectDesc: 'Engineered a cloud-based simulation visualization system. This system renders big data collected during NASA field campaigns (OLYMPEX, CPEX-AW, HS3) over a 3D globe.',
        tags: ['React', 'Redux', 'Cesium' ,'Python', 'AWS'],
        code: 'https://github.com/ghrcdaac/FCX-Frontend',
        demo: 'http://ghrc-fcx-olympex-flight-campaign-demo-szg.s3-website-us-east-1.amazonaws.com',
        image: six
    },
    {
        id: 2,
        projectName: 'FCX Subsetting Tool',
        projectDesc: 'A service for FCX field campaign explorer, that utilizes a serverless microservice architecture on AWS. This tool enables the subsetting of prime instrument data based on custom parameters, streamlining data processing for research purposes.',
        tags: ['AWS', 'Python', 'Terraform'],
        code: 'https://github.com/ghrcdaac/fcx-subsetting-tool',
        demo: 'http://ghrc-fcx-subsetting-tool-szg.s3-website-us-west-2.amazonaws.com',
        image: seven
    },
    {
        id: 3,
        projectName: 'FCX Histogram Tool',
        projectDesc: 'A service for FCX field campaign explorer, using serverless architecture in AWS infrastructure (dockerized lambdas) for 2D histogram representation of large datasets collected during the NASA GOES-R Field Campaign.',
        tags: ['AWS', 'Python', 'Docker', 'Terraform'],
        code: 'https://github.com/ghrcdaac/FCX-Histogram',
        demo: 'http://ghrc-fcx-histogram-tool-szg.s3-website-us-east-1.amazonaws.com',
        image: eight
    },
    {
        id: 4,
        projectName: 'UWG Lightning Dashboard interactive Notebook',
        projectDesc: 'Designed a lightning data visualization using NASA Lightning Data via WMTS over Mapbox in a live notebook environment. This dashboard was employed during UWG meetups for real-time lightning data analysis.',
        tags: ['Python', 'Plotly', 'Rasterio', 'Matplotlib'],
        code: 'https://github.com/ghrcdaac/UWG-Colab-Notebook',
        demo: '',
        image: five
    },
    {
        id: 5,
        projectName: 'ISM Publish',
        projectDesc: 'This project aims to build an end to end digital signage solution, including media inventory, campaign creator and proof of play system.',
        tags: ['React', 'Electron', 'Mongo', 'AMQP'],
        code: '',
        demo: '',
        image: one
    },
    {
        id: 6,
        projectName: 'Splashnode',
        projectDesc: 'With a license from ISM publish, curated a digital signage solution for Nepal, which is currently being used by several big digital media houses.',
        tags: ['Expres', 'React', 'Ruby', 'Electron'],
        demo: 'https://www.splashnode.com/',
        code: '',
        image: three
    },
    {
        id: 7,
        projectName: 'Spectrapass',
        projectDesc: 'This project facilitated data collection, patient forms, and result tracking. SpectraPass was created with the mission to help keep businesses and our economy open through current and future pandemics by allowing healthy people to go about their everyday lives.',
        tags: ['JQuery', 'CSS', 'HTML'],
        code: '',
        demo: '',
        image: two
    },
    {
        id: 8,
        projectName: 'Gurzu Log Analysis Tool',
        projectDesc: 'This project involves a ReactJs-based web solution for log analysis and threat detection, leveraging Kibana for pattern recognition of threat anomalies. Assisted in training a Machine Learning model for anomaly detection.',
        tags: ['React', 'Kibana'],
        code: '',
        demo: '',
        image: four
    },


]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/