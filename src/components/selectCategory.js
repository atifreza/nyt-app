import React from 'react';
import { useDispatch } from 'react-redux';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import { setCategory } from "../redux/actions/TopStoriesActions";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SelectCategory = ({ category }) => {
    const dispatch = useDispatch()
    const classes = useStyles();

    const categories = [
        {
            id: 1,
            value: 'world',
            name: 'World'
        },
        {
            id: 2,
            value: 'science',
            name: 'Science'
        }
    ]

    const handleChange = (event) => {
        dispatch(setCategory(event.target.value))
    };
    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="uncontrolled-native">Category</InputLabel>
                <NativeSelect
                    value={category}
                    onChange={handleChange}
                    inputProps={{
                        name: 'name',
                        id: 'uncontrolled-native',
                    }}
                >
                    {categories?.map((category, id) => {
                        const { name, value } = category
                        return <option key={id} value={value}>{name}</option>
                    })}
                </NativeSelect>
                <FormHelperText>Please select category</FormHelperText>
            </FormControl>
        </div>
    )
}

export default SelectCategory
