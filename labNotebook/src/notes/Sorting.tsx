import {ChangeEvent} from "react";
import {FormControl, FormControlLabel, Radio, RadioGroup} from "@mui/material";

interface SortProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Sorting = ({value, onChange}: SortProps) => {
    return (
        <div>
            <FormControl component="fieldset">
                <h4 style={{margin: '0'}}>Sorting: </h4>
                <RadioGroup row value={value} onChange={onChange}>
                    <FormControlLabel value="dateN" control={<Radio/>} label="Newest"/>
                    <FormControlLabel value="dateO" control={<Radio/>} label="Oldest"/>
                    <FormControlLabel value="text" control={<Radio/>} label="By Text"/>
                </RadioGroup>
            </FormControl>
        </div>
    )
}