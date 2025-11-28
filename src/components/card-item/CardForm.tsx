import {useRef} from 'react';
import {Calendar, CornerDownLeft, Plus} from "lucide-react";

const CardForm = () => {
    const editor = useRef<HTMLDivElement>(null);

    const handleToggleCreate = ()=> {
        editor.current?.classList.toggle("hidden");

        const textarea = editor.current?.querySelector("textarea");
        textarea?.focus();
    }

    return (
        <li className={"shadow rounded px-3 pt-2 pb-1 bg-white/60"}>
            <button
                onClick={handleToggleCreate}
                className={"w-full h-10 text-gray-600 flex gap-2 items-center justify-center cursor-pointer"}>
                <span className={"mt-1"}>Create</span>
                <Plus/>
            </button>

            <div className={"hidden"} ref={editor}>
                <textarea className={"p-2 border-none w-full h-20 resize-none focus:outline-none"}></textarea>
                <div className={"text-gray-500 p-2 flex justify-between"}>
                    <Calendar/>

                    <CornerDownLeft className={"cursor-pointer"}/>
                </div>
            </div>
        </li>
    );
};

export default CardForm;