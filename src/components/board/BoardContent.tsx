import { BoardProps } from "@/components/board/Board.tsx";
import { cn } from "@/lib/cn.ts";

const BoardContent = ({ className, children }: BoardProps) => {
    return (
        <main
            className={cn(
                "grid auto-cols-[minmax(10px, 300px)] grid-flow-col items-start w-auto",
                className
            )}
        >
            {children}
        </main>
    );
};

export default BoardContent;
