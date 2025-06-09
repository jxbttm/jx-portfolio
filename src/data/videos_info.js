import roboCarVideo from '../assets/videos/sicrobo_car.mp4';
import askMeAnythingVideo from '../assets/videos/ask_me_anything.mp4';
import imageCaptioningVideo from '../assets/videos/image_caption.mp4';
import wreckItRainaVideo from '../assets/videos/wreck_it_raina.mp4';

const videos = [
    {
        id: '1',
        type: 'local',
        src: imageCaptioningVideo,
        title: 'Image Captioning (Web Application)',
        description: 'This project demonstrates a web application that generates captions for images with various questions and answers. The project aimed to understand how to dockerize various services and how they communicate with each other.',
        languages: ['Python, JavaScript, HTML, CSS'],
        technologies: ['Docker, Angular, Flask, Bootstrap'],
        database: 'MySQL'
    },
    {
        id: '2',
        type: 'local',
        src: roboCarVideo,
        title: 'Robot Car Project (Msp432)',
        description: 'This project involved building an autonomous robot car using various sensors and programming it to navigate and follow a set of instructions from the web application.',
        languages: ['PHP, JavaScript, HTML, CSS'],
        technologies: ['HTML, CSS, JavaScript, Bootstrap'],
    },
    {
        id: '3',
        type: 'local',
        src: askMeAnythingVideo,
        title: 'Ask Me Anything (Web Application)',
        description: 'This project is a web-based forum application designed with robust security. It supports two user roles and enforces OWASP Top 10 security principles.',
        languages: ['Typescript, JavaScript, Python, HTML, CSS'],
        technologies: ['Docker, React, Django, Tailwind CSS'],
        database: 'PostgreSQL'
    },
    {
        id: '4',
        type: 'local',
        src: wreckItRainaVideo,
        title: 'Wreck It Raina (Desktop Application)',
        description: 'A 2D shooter game developed to demonstrate Object-Oriented Programming (OOP) principles.',
        languages: ['Java'],
    },
    {
        id: '5',
        type: 'youtube',
        src: "https://www.youtube.com/embed/ncpr-K_wJBo",
        title: 'Chem Go (Mobile Application)',
        description: 'This project is a mobile application designed to assist students in performing titrations using AR, providing a user-friendly interface and educational resources.',
        languages: ['Kotlin'],
        database: 'Firebase Firestore',
    }
];

export default videos;