import {PropsWithChildren} from "react";

import BoardFooter from "@/components/board/BoardFooter.tsx";
import BoardHeader from "@/components/board/BoardHeader.tsx";
import BoardContent from "@/components/board/BoardContent.tsx";
import Card from "@/components/board-card/Card.tsx";
import {cn} from "@/lib/cn.ts";
import {Calendar, CornerDownLeft, Plus} from "lucide-react";
import CardForm from "@/components/card-item/CardForm.tsx";

type BoardProps = PropsWithChildren<{
    className?: string;
}>;

const Board = ({className}: BoardProps)=> {
    return (
        <>
            <div className={cn("board grid items-end-safe", className)}>
                <BoardHeader />
                <BoardContent>
                    <Card label={"Todo"}>
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

                            <CardForm />
                        </ul>
                    </Card>
                    <Card label={"Doing"}>
                        <ul className={"flex flex-col gap-2"}>
                            <li className={"shadow rounded px-3 pt-2 pb-1 bg-white/60"}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </li>


                        </ul>
                    </Card>
                    <Card label={"Done"}>
                        <ul className={"flex flex-col gap-2"}>
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
                    </Card>
                </BoardContent>
                <BoardFooter />
            </div>
        </>
    );
}

export { type BoardProps };

export default Board;