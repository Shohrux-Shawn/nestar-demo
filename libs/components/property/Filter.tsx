import React, { useState } from "react";
import { 
    IconButton, 
    OutlinedInput, 
    Typography,
    Checkbox,
    Button, 
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Stack, 
    Tooltip 
} from "@mui/material";
// import { propertySquare } from "../../config";
import RefreshIcon from "@mui/icons-material/Refresh";

const Filter = () => {
    const [searchText, setSearchText] = useState<string>("");
    const [showMore, setShowMore] = useState<boolean>(false);
    const [propertyPrice, setPropertPrice] = useState({
        start: 0,
        end: 250000,
    });

    return (
        <Stack className={"filter-main"}>
            <Stack className={"find-your-home"} mb={"40px"}>
                <Typography className={"title-main"}>Find Your Home</Typography>
                <Stack className={"input-box"}>
                    <OutlinedInput 
                        value={searchText}
                        type={"text"}
                        className={"search-input"}
                        placeholder={"What are you looking?"}
                        onChange={(e: any) => setSearchText(e.target.value)}
                    />
                    <img src={"/img/icons/search_icon.png"} alt="" />
                    <Tooltip title="Reset">
                        <IconButton>
                            <RefreshIcon />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
            <Stack className={"find-your-home"} mb={"30px"}></Stack>
            <Stack className={"find-your-home"} mb={"30px"}></Stack>
            <Stack className={"find-your-home"} mb={"30px"}></Stack>
            <Stack className={"find-your-home"} mb={"30px"}></Stack>
            <Stack className={"find-your-home"} mb={"30px"}></Stack>
            <Stack className={"find-your-home"} mb={"30px"}></Stack>
            <Stack className={"find-your-home"}></Stack>
        </Stack>
    );

}

export default Filter;