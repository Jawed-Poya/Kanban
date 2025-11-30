import {cn} from "@/lib/cn.ts";
import {BoardProps} from "@/components/board/Board.tsx";

const List = ({className, children}: BoardProps) => {
    return (
        <ul className={cn("flex flex-col gap-2 ", className)}>
            {children}
        </ul>
    );
}

export default List;