import { Layers, Server, Wrench, Brain, HeartHandshake } from 'lucide-react';

const skillGroups = [
    {
        category: 'frontend',
        Icon: Layers,
        skills: ['Vue.js', 'Vuex', 'Pinia', 'Vuetify', 'Webpack', 'Vite', 'TypeScript', 'Tailwind', 'React', 'Storybook', 'Next.JS'],
    },
    {
        category: 'backend',
        Icon: Server,
        skills: ['Node.js', 'MySQL', 'API Rest', 'Express', 'PHP', 'CodeIgniter', 'MongoDB', 'NestJS', 'Symfony'],
    },
    {
        category: 'tools',
        Icon: Wrench,
        skills: ['Git / GitHub', 'Vitest / Jest', 'Docker', 'Nightwatch', 'Vite', 'Jenkins', 'Ansible'],
    },
    {
        category: 'ia',
        Icon: Brain,
        skills: ['Claude Code', 'Développement agentique', 'Plan mode'],
    },
    {
        category: 'soft-skills',
        Icon: HeartHandshake,
        skills: [
            'Adaptabilité',
            'Autonomie',
            'Curiosité',
            'Bienveillance',
            'Communication',
            'Travail d\'équipe',
            'Rigueur',
            'Créativité',
            'Pédagogie',
            'Veille active',
            'Mentorat'
        ],
    },
];

export default skillGroups;
