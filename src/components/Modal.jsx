import React from "react"

const baseFlexbox = (isOriental) => `flex ${isOriental ? "flex-row-reverse" : ""} p-6`

const Modal = ({ isOriental = false }) => (
    <div className="rounded border divide-y border-blue-700 w-1/2 shadow-md">
        <div className={`${baseFlexbox(isOriental)} justify-between`}>
            <p className="capitalize">title</p>
            <button className="text-blue-700 px-2 py-1 rounded-md hover:bg-blue-200 ">x</button>
        </div>
        <div className={baseFlexbox(isOriental)}>text here....</div>
        <div className={`${baseFlexbox(isOriental)} space-x-4 gap-4 justify-end`}>
            <button className="border border-red-700 rounded p-2 hover:bg-red-200">cancel</button>
            <button className="border border-blue-700 rounded p-2 hover:bg-blue-200">save</button>
        </div>
    </div>
)

export default Modal;
