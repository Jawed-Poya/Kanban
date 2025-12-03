import {cn} from "@/lib/cn.ts";
import {BoardProps} from "@/components/board/Board.tsx";
import {Edit} from "lucide-react";

const ListItem = ({className, children}: BoardProps) => {
    return (
        <li draggable className={cn("text-sm overflow-hidden hover:ps-6 transition-[padding] relative group shadow rounded px-3 pt-2 pb-1 bg-white/60 ", className)}>

            <input type={"radio"} className={"group-hover:-translate-x-[18px] absolute -translate-x-7 transition-transform"} />

            {children}

            <button
                className="
                    cursor-pointer
                    p-1
                    border border-gray-200
                    rounded-full
                    bg-white
                    absolute top-1 right-1
                    opacity-0 group-hover:opacity-100
                    transition-opacity
                "
            >
                <Edit size={"16px"} />
            </button>
        </li>
    );
}


export default ListItem;