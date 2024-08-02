import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const Navbar = () => {
	return (
		<AppBar
			sx={{
				bgcolor: "white",
				boxShadow: "none",
			}}>
			<Toolbar
				sx={{
					justifyContent: "space-between",
				}}>
				<Typography
					color={"#000"}
					variant="h6"
					fontWeight={600}>
					{"Reza Buzarjemehri"}
				</Typography>
				<Box display="flex">
					<Button
						disableRipple
						sx={{
							color: "black",
							"&: hover": {
								color: "purple",
							},
						}}>
						{"About Me"}
					</Button>
					<Button
						disableRipple
						sx={{
							color: "black",
							"&: hover": {
								color: "purple",
							},
						}}>
						{"About Me"}
					</Button>
					<Button
						disableRipple
						sx={{
							color: "black",
							"&: hover": {
								color: "purple",
							},
						}}>
						{"About Me"}
					</Button>
					<Button
						disableRipple
						sx={{
							color: "black",
							"&: hover": {
								color: "purple",
							},
						}}>
						{"About Me"}
					</Button>
				</Box>
				<Button variant="contained">{"Download Resume"}</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
