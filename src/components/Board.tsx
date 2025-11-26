import {cn} from "../lib/cn.ts";
import type {PropsWithChildren} from "react";
import KanbanLogo from "../assets/KanbanLogo.tsx";
import {Calendar, CornerDownLeft, MoreVertical, Plus} from "lucide-react";

type BoardProps = PropsWithChildren<{
    className?: string;
}>;

const Board = ({className}: BoardProps)=> {
    return (
        <>
            <div className={cn("board grid items-end-safe", className)}>
                <BoardHeader/>
                <BoardContent>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </BoardContent>
                <BoardFooter/>
            </div>
        </>
    );
}

const Card = () => {
    return (
        <div className={"p-4 bg-white/10 border border-gray-200 rounded-lg shadow"}>
            <div className={"card-header flex justify-between "}>
                <h3 className={"text-lg font-medium"}>1 Todos</h3>
                <MoreVertical className={"cursor-pointer"}/>
            </div>

            <div className={"card-body min-h-[90%] mt-4"}>
                <ul className={"flex flex-col gap-2"}>
                    <li className={"shadow rounded px-3 pt-2 pb-1 bg-white/60"}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li className={"shadow rounded px-3 pt-2 pb-1 bg-white/60"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li className={"shadow rounded px-3 pt-2 pb-1 bg-white/60"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>
                <li className={"shadow rounded px-3 pt-2 pb-1 bg-white/60"}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </li>

                <li className={"shadow rounded px-3 pt-2 pb-1 bg-white/60"}>
                    <button
                        className={"w-full h-10 text-gray-600 flex gap-2 items-center justify-center cursor-pointer"}>
                        <span className={"mt-1"}>Create</span>
                        <Plus/>
                    </button>

                    <div className={""}>
                            <textarea className={"p-2 border-none w-full h-20 resize-none focus:outline-none"}>

                            </textarea>
                        <div className={"text-gray-500 p-2 flex justify-between"}>
                            <Calendar/>

                            <CornerDownLeft className={"cursor-pointer"}/>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        </div>
    );
}

const BoardContent = ({
    className, children
}: BoardProps) => {
    return (
        <main
            className={cn("grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] items-start gap-5 min-h-[calc(100vh_-_112px)]", className)}>
            {children}
        </main>
    );
};

const BoardHeader = ({
    className
}: BoardProps) => {
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

function BoardFooter({
    className
}: BoardProps) {
    return (
        <footer className={cn("h-10 p-3 text-center text-gray-600 text-xs", className)}>
            Copyright &copy; {new Date().getFullYear()} Kanban all rights reserved.
        </footer>
    );
}

export { BoardHeader };

export default Board;