import type {PropsWithChildren} from "react";

type KanbanLogoProps = PropsWithChildren<{
    size?: number;
    className?: string;
    title?: string;
}>;

export default function KanbanLogo({ size = 48, className, title = "Kanban" }: KanbanLogoProps) {
    const px = size;
    return (
        <svg
            className={className}
            width={px}
            height={px}
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="kanbanTitle"
            fill="none"
        >
            <title id="kanbanTitle">{title}</title>

            <rect x="4" y="8" width="56" height="48" rx="4" ry="4" stroke="currentColor" strokeWidth="3" />
            <line x1="24" y1="10" x2="24" y2="54" stroke="currentColor" strokeWidth="2" />
            <line x1="40" y1="10" x2="40" y2="54" stroke="currentColor" strokeWidth="2" />

            <rect x="8" y="14" width="10" height="6" rx="1.2" fill="currentColor" />
            <rect x="8" y="24" width="10" height="6" rx="1.2" fill="currentColor" />

            <rect x="28" y="18" width="10" height="6" rx="1.2" fill="currentColor" />
            <rect x="28" y="28" width="10" height="6" rx="1.2" fill="currentColor" />

            <rect x="44" y="22" width="10" height="6" rx="1.2" fill="currentColor" />
        </svg>
    );
}
