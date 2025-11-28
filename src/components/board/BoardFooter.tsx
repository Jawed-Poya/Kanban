import { cn } from "@/lib/cn";
import {BoardProps} from "@/components/board/Board.tsx";

const BoardFooter = ({ className }: BoardProps) => {
    return (
        <>
            <footer
                className={cn(
                    "h-10 p-3 text-center text-gray-600 text-xs",
                    className
                )}
            >
                Copyright &copy; {new Date().getFullYear()} by Kanban. All
                rights reserved.
            </footer>
        </>
    );
};

export default BoardFooter;
