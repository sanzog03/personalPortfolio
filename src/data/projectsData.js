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
        projectName: 'FCX (Field Campaign Explorer)',
        projectDesc: 'Engineered a cloud-based simulation visualization system. This system renders big data collected during NASA field campaigns (OLYMPEX, CPEX-AW, HS3) over a 3D globe.',
        tags: ['ReactJS', 'Redux', 'Cesium', 'MUI'],
        code: 'https://github.com/ghrcdaac/FCX-Frontend',
        demo: 'https://ghrc.earthdata.nasa.gov/fcx/index.html',
    },
    {
        id: 2,
        projectName: 'FCX : Backend',
        projectDesc: 'Engineered a cloud-based simulation visualization system. This system renders big data collected during NASA field campaigns (OLYMPEX, CPEX-AW, HS3) over a 3D globe.',
        tags: ['Python', 'AWS'],
        code: 'https://github.com/ghrcdaac/FCX-Backend',
    },
    {
        id: 3,
        projectName: 'FCX : Subsetting Tool',
        tags: ['Python', 'AWS Lambda', 'Terraform'],
        code: 'https://github.com/ghrcdaac/fcx-subsetting-tool'
    },
    {
        id: 4,
        projectName: 'FCX : Histogram Tool',
        tags: ['Python', 'Docker', 'AWS Lamdba', 'Terraform'],
        code: 'https://github.com/ghrcdaac/FCX-Histogram',
    },
    {
        id: 5,
        projectName: 'FCX : Playground Package',
        projectDesc: '',
        tags: ['Python', 'Scipy', 'Notebook', 'Docker'],
        code: 'https://github.com/ghrcdaac/fcx-playground-backend',
        demo: 'https://pypi.org/project/fcx-playground/',
    },
    {
        id: 6,
        projectName: 'FCX : Playground Frontend',
        projectDesc: '',
        tags: ['ReactJS', 'Redux', 'Cesium', 'MUI'],
        code: 'https://github.com/ghrcdaac/fcx-playground-frontend',
        demo: 'https://ghrc.earthdata.nasa.gov/fcx-playground',
    },
    {
        id: 7,
        projectName: 'FCX : GraphQL backend',
        tags: ['Python', 'Django', 'GraphQL', 'Postgresql', 'Docker', 'Terraform'],
        code: 'https://github.com/sanzog03/fcx_backend_api',
    },
    {
        id: 8,
        projectName: 'Spectrapass',
        projectDesc: 'This project facilitated data collection, patient forms, and result tracking. SpectraPass was created with the mission to help keep businesses and our economy open through current and future pandemics by allowing healthy people to go about their everyday lives.',
        tags: ['ReactJS', 'CSS', 'HTML'],
        demo: 'https://spectrapass.com/'
    },
    {
        id: 9,
        projectName: 'ISM Publish',
        projectDesc: 'This project aims to build an end to end digital signage solution, including media inventory, campaign creator and proof of play system.',
        tags: ['ReactJS', 'ElectronJS', 'MongoDB', 'AMQP'],
        demo: 'https://mps.ismconnect.com/'
    },
    {
        id: 10,
        projectName: 'Splashnode',
        projectDesc: 'With a license from ISM publish, curated a digital signage solution for Nepal, which is currently being used by several big digital media houses.',
        tags: ['ExpressJS', 'ReactJS', 'Ruby', 'ElectronJS', 'MongoDB'],
        demo: 'https://www.splashnode.com/'
    },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'ReactJS'],
    code: '',
    demo: '',
    image: ''
}, 
*/