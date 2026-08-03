import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const socialLinks = [
    {
        name: 'GitHub',
        handle: '@Chriscrat',
        href: 'https://github.com/Chriscrat',
        Icon: FaGithub,
    },
    {
        name: 'Email',
        handle: 'dev-cba@pm.me',
        href: 'mailto:dev-cba@pm.me',
        Icon: Mail,
    },
    {
        name: 'LinkedIn',
        handle: 'Christophe Barreto',
        href: 'https://www.linkedin.com/in/cba-dev/',
        Icon: FaLinkedinIn,
    },
]

export default socialLinks
