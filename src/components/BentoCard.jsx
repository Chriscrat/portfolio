import './bento-card.scss';

const animationClass = {
    floatX: 'bento-float-x',
    floatY: 'bento-float-y',
    floatXReverse: 'bento-float-x-rev',
    floatYReverse: 'bento-float-y-rev',
    none: '',
};

export default function BentoCard({
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
    const anim = animationClass[animation] ?? '';

    const base = accent
        ? [
                className,
                'relative overflow-hidden rounded-md p-7',
                'bg-gradient-to-br from-primary to-accent',
                'transition-[transform,box-shadow,background-image] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                anim,
        ]
        : [
                className,
                'relative overflow-hidden rounded-md p-7 backdrop-blur-md',
                'transition-[transform,box-shadow,border-color,background] duration-[250ms] ease-[cubic-bezier(0.4,0,0.2,1)]',
                anim,
        ];

    const classes = base.filter(Boolean).join(' ');

    const cardStyle = {
        '--anim-duration': animationDuration,
        '--anim-delay': animationDelay,
        ...style,
    };

    if (href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={classes}
                style={cardStyle}
            >
                {children}
            </a>
        );
    }

    return (
        <div
            className={classes}
            style={cardStyle}
            onClick={onClick}
        >
            {children}
        </div>
    );
}
