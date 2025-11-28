import {BoardProps} from "@/components/board/Board.tsx";
import {cn} from "@/lib/cn.ts";

const BoardContent = ({ className, children }: BoardProps) => {
    return (
        <main
            className={cn("grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-start gap-5 min-h-[calc(100vh_-_112px)]", className)}>
            {children}
        </main>
    );
};

export default BoardContent;