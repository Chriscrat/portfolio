import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
    {
        name: 'GitHub',
        handle: '@Chriscrat',
        href: 'https://github.com/Chriscrat',
        Icon: FaGithub,
        animation: 'floatX',
        animationDuration: '8s',
        animationDelay: '0s',
    },
    {
        name: 'Email',
        handle: 'dev-cba@pm.me',
        href: 'mailto:dev-cba@pm.me',
        Icon: Mail,
        animation: 'floatXReverse',
        animationDuration: '9s',
        animationDelay: '0.7s',
    },
    {
        name: 'LinkedIn',
        handle: 'Christophe Barreto',
        href: 'https://www.linkedin.com/in/cba-dev/',
        Icon: FaLinkedinIn,
        animation: 'floatX',
        animationDuration: '10s',
        animationDelay: '1.4s',
    },
]

export default socialLinks
