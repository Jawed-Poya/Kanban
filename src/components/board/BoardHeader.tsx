import {cn} from "@/lib/cn.ts";
import KanbanLogo from "@/assets/KanbanLogo.tsx";
import {BoardProps} from "@/components/board/Board.tsx";

const BoardHeader = ({ className }: BoardProps) => {
    return (
        <header className={cn("h-18 p-2 flex justify-between items-center", className)}>
            <div className={"flex items-center justify-between w-fit flex-col"}>
                <KanbanLogo/>
                <span className={"text-xs"}>Kanban</span>
            </div>

            <div className={"text-xl font-medium flex flex-col text-right"}>
                <span>Kanban</span>
                <span className={"text-xs font-normal italic"}>A system for task management.</span>
            </div>
        </header>
    );
}

export default BoardHeader;