import React from "react";
import Button from '@mui/material/Button';

export function PrimaryButton (props) {


    return (
        <Button variant="contained" color="primary" onClick = {props.onClick} disabled = {props.disabled}>{props.label}</Button>
    )
}

export function SecondaryButton (props) {

    return (
        <Button variant="outlined" color="primary" onClick = {props.onClick} disabled = {props.disabled}>{props.label}</Button>
    )
}