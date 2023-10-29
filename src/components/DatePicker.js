import React from "react"

function DatePicker(props) {
    return (
        <>
            <label htmlFor="start">APOD date:</label>
            <input
                type="date"
                value={props.selectedDate}
                onChange={e => props.setSelectedDate(e.target.value)}
            />
        </>
    )
}

export default DatePicker