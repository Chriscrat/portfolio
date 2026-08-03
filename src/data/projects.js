import { LayoutDashboard, Braces, Component } from 'lucide-react'

const projects = [
    {
        id: 'devflow',
        title: 'DevFlow',
        description: 'Un tableau de bord complet pour la gestion des tâches d\'équipe. Il intègre un système Kanban en temps réel, permet le suivi précis des sprints et génère des rapports détaillés pour améliorer l\'efficacité opérationnelle.',
        stack: ['Vue.js', 'Node.js', 'PostgreSQL'],
        iconColor: '#6d0dd3',
        Icon: LayoutDashboard,
        status: 'Live',
        github: 'https://github.com/mockuser/devflow',
        liveUrl: 'https://www.devflow-demo.com',
        cover: '/assets/images/projects/devflow_cover.png',
        screenshots: ['/assets/images/projects/devflow_1.png', '/assets/images/projects/devflow_2.png'],
        animation: 'floatY',
        animationDuration: '8s',
        animationDelay: '0s',
    },
    {
        id: 'typeapi',
        title: 'TypeAPI',
        description: "Ce boilerplate API REST est construit en TypeScript et Express. Il fournit une gestion robuste de l'authentification (JWT), utilise Zod pour la validation des données à chaque niveau, garantissant une architecture propre et maintenable.",
        stack: ['TypeScript', 'Express', 'JWT'],
        iconColor: '#994bec',
        Icon: Braces,
        status: 'Live',
        github: 'https://github.com/mockuser/typeapi',
        liveUrl: 'https://api.typeapi-demo.com',
        cover: '/assets/images/projects/typeapi_cover.png',
        screenshots: ['/assets/images/projects/typeapi_1.png', '/assets/images/projects/typeapi_2.png'],
        animation: 'floatX',
        animationDuration: '9s',
        animationDelay: '1.2s',
    },
    {
        id: 'vuekit',
        title: 'VueKit',
        description: 'Une bibliothèque de composants UI réutilisables pour Vue 3. Elle met l\'accessibilité au centre (ARIA compliant), supporte le dark mode nativement, et est conçue sans aucune dépendance externe lourde.',
        stack: ['Vue.js 3', 'TypeScript', 'Vite'],
        iconColor: '#b989eb',
        Icon: Component,
        status: 'Mock',
        github: 'https://github.com/mockuser/vuekit',
        liveUrl: null, // No official URL provided yet
        cover: '/assets/images/projects/vuekit_cover.png',
        screenshots: ['/assets/images/projects/vuekit_1.png'],
        animation: 'floatYReverse',
        animationDuration: '7s',
        animationDelay: '0.6s',
    },
]

export default projects
