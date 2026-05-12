import { LayoutDashboard, Braces, Component } from 'lucide-react'

const projects = [
    {
        id: 'devflow',
        title: 'DevFlow',
        description: 'Dashboard de gestion de tâches pensé pour les équipes de développement. Kanban temps réel, suivi des sprints et reporting.',
        stack: ['Vue.js', 'Node.js', 'PostgreSQL'],
        iconColor: '#6d0dd3',
        Icon: LayoutDashboard,
        status: 'Mock',
        github: '#',
        animation: 'floatY',
        animationDuration: '8s',
        animationDelay: '0s',
    },
    {
        id: 'typeapi',
        title: 'TypeAPI',
        description: "Boilerplate d'API REST TypeScript avec Express. Authentification JWT, validation Zod, architecture en couches.",
        stack: ['TypeScript', 'Express', 'JWT'],
        iconColor: '#994bec',
        Icon: Braces,
        status: 'Mock',
        github: '#',
        animation: 'floatX',
        animationDuration: '9s',
        animationDelay: '1.2s',
    },
    {
        id: 'vuekit',
        title: 'VueKit',
        description: 'Bibliothèque de composants UI pour Vue.js 3. Accessibilité first, dark mode natif, zéro dépendance externe.',
        stack: ['Vue.js 3', 'TypeScript', 'Vite'],
        iconColor: '#b989eb',
        Icon: Component,
        status: 'Mock',
        github: '#',
        animation: 'floatYReverse',
        animationDuration: '7s',
        animationDelay: '0.6s',
    },
]

export default projects
