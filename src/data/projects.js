import { Globe, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const projects = [
    {
        id: 'groovebox',
        title: 'Groovebox',
        description:
            "Application de composition de morceaux de musique à partir d'échantillon (samples) pour reproduire un style musical (preset) : Dubstep, Lo-fi, etc. Ces derniers proposent des instruments qui sera possible de faire jouer en activant des notes sur une piste de 15 notes (step) tout en pouvant ajuster le tempo.",
        stack: ['Vue.js 3', 'Pinia', 'TypeScript', 'Tone.js'],
        iconColor: '#6d0dd3',
        Icon: null,
        status: 'Mock',
        links: [
            {
                text: 'GitHub',
                icon: FaGithub,
                url: 'https://github.com/Chriscrat/groovebox',
            },
        ],
        cover: '/projects/groovebox/cover.png',
        screenshots: ['/projects/groovebox/cover.png', '/projects/groovebox/lo-fi.png', '/projects/groovebox/dubstep.png'],
        animation: 'floatY',
        animationDuration: '8s',
        animationDelay: '0s',
    },
    {
        id: 'oserbouger',
        title: 'Oser bouger',
        description:
            "Application qui affiche des évènements en Île-de-France sous forme de cartes avec scroll infini, carte interactive, système de filtres à facettes (adresse, ville, code postal). Il s'agit d'une démarche personnelle de découverte de la stack Angular dans un cas concret ou l'on consomme une API publique et applique le design system de l'État.",
        stack: ['Angular', 'TypeScript', 'DSFR'],
        iconColor: '#994bec',
        Icon: null,
        status: 'Live',
        links: [
            {
                text: 'GitHub',
                icon: FaGithub,
                url: 'https://github.com/Chriscrat/oser-bouger',
            },
            {
                text: 'Site officiel',
                icon: Globe,
                url: 'https://oser-bouger.dev-cba.com',
            },
            {
                text: "Système de Design de l'État",
                icon: ExternalLink,
                url: 'https://www.systeme-de-design.gouv.fr/version-courante/fr',
            },
            {
                text: 'Opendata Paris',
                icon: ExternalLink,
                url: 'https://opendata.paris.fr/pages/home/',
            },
        ],
        cover: '/projects/oser-bouger/cover.png',
        screenshots: [
            '/projects/oser-bouger/homepage.png',
            '/projects/oser-bouger/filters.png',
            '/projects/oser-bouger/cards.png',
            '/projects/oser-bouger/map.png',
            '/projects/oser-bouger/dark-theme.png',
        ],
        animation: 'floatX',
        animationDuration: '9s',
        animationDelay: '1.2s',
    },
    {
        id: 'pixel-tchat',
        title: 'Pixel tchat',
        description:
            "Application de communication par texte. Elle permet de créer et de rejoindre des groupes de discussion. Ce projet permet de mettre en application une démarche d'architecture qui sépare le frontend, le backend et la base de données dans des containers isolés. Les messages sont persistés sur une base de données PostgreSQL par le biais d'un backend en NestJS puis afficher sur un frontend réalisé avec Next.js. Pour des soucis de performance, un middleware Redis est mis en place pour la synchronisation des messages en temps réel.",
        stack: ['Next.js', 'NestJS', 'TypeScript', 'TailwindCSS', 'Docker', 'PostgreSQL', 'Redis'],
        iconColor: '#b989eb',
        Icon: null,
        status: 'Mock',
        links: [
            {
                text: 'GitHub',
                icon: FaGithub,
                url: 'https://github.com/pixel-tchat',
            },
        ],
        cover: '/projects/pixel-tchat/cover.png',
        screenshots: [],
        animation: 'floatYReverse',
        animationDuration: '7s',
        animationDelay: '0.6s',
    },
];

export default projects;
