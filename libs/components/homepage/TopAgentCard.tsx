import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const TopAgentCard = () => {
    return (
        <Stack className="top-agent-card">
            <Box 
               className="card-img" 
               style={{
                backgroundImage: `url("/img/profile/girl.svg")`,
               }}
            >
            </Box>
            <Box className={"info"}>
                <strong>Marina</strong>
                <div className={"agent-name"}>Agent</div>
            </Box>
        </Stack>
    );
};
export default TopAgentCard;