import React from "react";
import { data } from "../mocks/data";

const BASEURL = "https://goscrum-api.alkemy.org";

const onSubmit = async (userName = "test", password = "1234", email = "test@test.com", role = "", continent = "", region = "") => {
    const teamID = "f8805591-e95e-4193-8b66-0a42e8334cee";
    const user = {
        userName,
        password,
        email,
        teamID,
        role,
        continent,
        region,
    }
    const response = await fetch(`${BASEURL}/register`, {
        method: "POST",
        header: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user })
    });
};
const doAction = () => {

}

const GridCell = ({ children, className }) => {
    return (
        <div
            role="gridcell"
            className={`grid-flow-col py-4 px-2 
            group-hover:bg-cyan-50 whitespace-nowrap text-ellipsis grow
            ${className || ""}`}
        >
            {children}
        </div>
    );
}

const GridHeader = ({ children, className = "" }) => {
    return (
        <div
            className={`grid-flow-col border-b border-cyan-200 text-cyan-400 font-medium p-2 ${className}`}
        >
            {children}
        </div>
    );
}

const GridRows = ({ doAction, user }) =>
    <>
        <GridCell>{user.name}</GridCell>
        <GridCell>{user.surname}</GridCell>
        <GridCell className={`whitespace-pre-wrap`}>{user.address}</GridCell>
        <GridCell>{user.phone}</GridCell>
        <GridCell className="col-span-2">{user.pet}</GridCell>
        <GridCell>
            <button onClick={() => onSubmit()} className=" w-full mx-2 text-cyan-700 uppercase border border-cyan-700 rounded p-2 hover:bg-cyan-200">
                action
            </button>
        </GridCell>
    </>

export const getUserBirthYear = (user) => new Date().getFullYear() - user.age;

export function Grid() {
    return (
        <div className="grid grid-cols-[10%_10%_30%_auto_auto_auto_auto] whitespace-nowrap text-ellipsis w-full last:border-b-0">
            <GridHeader>Firstname</GridHeader>
            <GridHeader>Lastname</GridHeader>
            <GridHeader>Address</GridHeader>
            <GridHeader>Phone Number</GridHeader>
            <GridHeader className="col-span-2">Pet type</GridHeader>
            <GridHeader>Action</GridHeader>
            {data.map((user) => (<GridRows user={user} doAction={getUserBirthYear} />))}
        </div>
    );
}
