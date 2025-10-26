import withLayoutBasic from "@/libs/components/layout/LayoutBasic";
import Filter from "@/libs/components/property/Filter";
import KeyboardArrowDownRoundedIcon  from "@mui/icons-material/KeyboardArrowDownRounded";
import { Box, Button, Stack } from "@mui/material";
import { NextPage } from "next";
import { useState } from "react";

const PropertyList: NextPage = () => {
    const [properties, setProperties] = useState<number[]>([1, 2, 3, 4, 5, 6]);

    return (
        <div id={"property-list-page"} style={{ position: "relative" }}>
            <Stack className="container">
                <Box className={"right"}>
                    <span>Sorty by</span>
                    <div>
                        <Button endIcon={<KeyboardArrowDownRoundedIcon/>}>New</Button>
                    </div>
                </Box>
                <Stack className={"property-page"}>
                    <Stack className={"filter-config"}>
                        <Filter />
                    </Stack>
                    <Stack className={"main-config"} mb={"76px"}></Stack>
                </Stack>
            </Stack>
        </div>
    )
}

export default withLayoutBasic(PropertyList);