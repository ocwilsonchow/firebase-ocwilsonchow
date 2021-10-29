import React from 'react'

export default function CurrentDayDescriptionItem({ name, value, unit }) {
    return (
        <div>
            <p>{name}</p>
            <p> {value} {unit} </p>
        </div>
    )
}
