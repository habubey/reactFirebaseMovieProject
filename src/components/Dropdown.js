import * as React from 'react';
import { TextField, Autocomplete } from '@mui/material';


export const Dropdown = ({
    label,
    labelVariable,
    options,
    multiple,
    onChange,
    fetchData,
    max,
}) => {
    
    const [optionsState, setOptionsState] = React.useState(
        options || []
    );
    const [disabled, setDisabled] = React.useState(false);
    React.useEffect(() => {
        if (fetchData) {
            (async () => {
                let { data, status } = await fetchData();
                if (status === 200) {
                    let reducedData = data.map((item) => {
                        return {
                            label: item[labelVariable || 'label'],
                            value: item._id,
                        };
                    });
                    setOptionsState(reducedData);
                }
            })();
        }
    }, []);
    const handleChange = (
        event,
        value
    ) => {
        onChange(value);
    };

    return (
        <Autocomplete
            disablePortal
            fullWidth
            options={disabled ? [] : optionsState}
    
            multiple={multiple}
            sx={{ width: '100%' }}
            onChange={(event, value) => {
                if (multiple && max && value && value.length && value.length === max) {

                    setDisabled(true);
                } else {
                    setDisabled(false);
                }
                handleChange(event, value);
            }}
            renderInput={(params) => (
                <TextField {...params} label={label} fullWidth size="small" />
            )}
        />
    );
};