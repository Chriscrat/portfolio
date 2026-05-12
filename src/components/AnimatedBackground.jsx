export default function AnimatedBackground({
    children,
    className = '',
    animation = 'none',
    animationDuration = '6s',
    animationDelay = '0s',
    style = {},
    onClick,
    href,
    accent = false,
}) {
    return <div className="fixed top-1/2 left-1/2 -z-10">
        <div className="absolute -top-96 -left-96 lg:w-[800px] lg:h-[800px] h-[500px] w-[500px] bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -top-10 -right-40 lg:w-[600px] lg:h-[600px] h-[400px] w-[400px] bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 -right-30 lg:w-[500px] lg:h-[500px] h-[350px] w-[350px] bg-accent rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </div>;
};
