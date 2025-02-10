import React from "react";
import Input from "./Form";

function Register() {
    return (
        <form className="form">
            <Input
                type="text"
                placeholder="Username"
            />
            <Input
                type="password"
                placeholder="Password"
            />
            <Input
                type="password"
                placeholder="ConfirmPassword"
            />
            <button type="submit">Register</button>
        </form>
    )
}