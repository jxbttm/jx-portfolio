import roboCarVideo from '../assets/videos/sicrobo_car.mp4';
import askMeAnythingVideo from '../assets/videos/ask_me_anything.mp4';

const videos = [
    {
        id: '1',
        type: 'youtube',
        src: "https://www.youtube.com/embed/y-L7ZdrOQG4",
        title: 'Image Captioning',
        description: 'This project demonstrates a web application that generates captions for images with various questions and answers. The project aimed to understand how to dockerize various services. Technologies: Docker, Angular, Flask ',
    },
    {
        id: '2',
        type: 'local',
        src: roboCarVideo,
        title: 'Robot Car Project (Msp432)',
        description: 'This project involved building an autonomous robot car using various sensors and programming it to navigate and follow a set of instructions from the web application. Technologies: HTML, CSS, JavaScript, PHP, C ',
    },
    {
        id: '3',
        type: 'local',
        src: askMeAnythingVideo,
        title: 'Ask Me Anything App Video',
        description: 'A description of the Ask Me Anything application. This app allows users to post questions and receive answers from a community, fostering engaging discussions.',
    },
    {
        id: '4',
        type: 'youtube',
        src: 'https://www.youtube.com/embed/HlJafyLnEXI',
        title: 'Wreck It Raina YouTube Video',
        description: 'This is a description for the Wreck It Raina YouTube video. It showcases various aspects of the project, highlighting challenges faced and solutions implemented.',
    },
    {
        id: '5',
        type: 'youtube',
        src: "https://www.youtube.com/embed/ncpr-K_wJBo",
        title: 'Chem Go (Titration)',
        description: 'This is a description for the Wreck It Raina YouTube video. It showcases various aspects of the project, highlighting challenges faced and solutions implemented.',
    }
];

export default videos;