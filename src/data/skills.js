import { Layers, Server, Wrench } from 'lucide-react'

const skillGroups = [
    {
        category: 'Frontend',
        Icon: Layers,
        skills: [
            { name: 'Vue.js', level: 90 },
            { name: 'Vuex', level: 90 },
            { name: 'Pinia', level: 90 },
            { name: 'Vuetify', level: 80 },
            { name: 'Webpack', level: 70 },
            { name: 'Vite', level: 65 },
            { name: 'TypeScript', level: 65 },
            { name: 'Tailwind', level: 60 },
            { name: 'React', level: 60 },
            { name: 'Storybook', level: 60 },
            { name: 'Next.JS', level: 50 },
        ],
    },
    {
        category: 'Backend',
        Icon: Server,
        skills: [
            { name: 'Node.js', level: 80 },
            { name: 'MySQL', level: 80 },
            { name: 'API Rest', level: 80 },
            { name: 'Express', level: 70 },
            { name: 'PHP', level: 70 },
            { name: 'CodeIgniter', level: 70 },
            { name: 'MongoDB', level: 60 },
            { name: 'NestJS', level: 40 },
            { name: 'Symfony', level: 40 },

        ],
    },
    {
        category: 'Outils',
        Icon: Wrench,
        skills: [
            { name: 'Git / GitHub', level: 90 },
            { name: 'Vitest / Jest', level: 75 },
            { name: 'Docker', level: 70 },
            { name: 'Nightwatch', level: 70 },
            { name: 'Vite', level: 60 },
            { name: 'Jenkins', level: 60 },
            { name: 'Ansible', level: 40 },
        ],
    },
]

export default skillGroups
