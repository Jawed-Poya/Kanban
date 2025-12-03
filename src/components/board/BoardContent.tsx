import {BoardProps} from "@/components/board/Board.tsx";
import {cn} from "@/lib/cn.ts";

const BoardContent = ({ className, children }: BoardProps) => {
    return (
        <main
            className={cn("grid auto-cols-[300px] grid-flow-col items-start gap-5 w-auto min-h-[calc(100vh_-_112px)]", className)}>
            {children}
        </main>
    );
};

export default BoardContent;