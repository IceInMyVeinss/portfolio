"use client";

import * as React from "react";
import Box from "@mui/joy/Box";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Person from "@mui/icons-material/Person";
import GithubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

export function Header() {
  return (
    <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
      <List role="menubar" orientation="horizontal">
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Home"
          >
            Home
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Projects
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none">
          <ListItemButton role="menuitem" component="a" href="#horizontal-list">
            Recent work
          </ListItemButton>
        </ListItem>
        <ListDivider />
        <ListItem role="none" sx={{ marginInlineStart: "auto" }}>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <InstagramIcon />
          </ListItemButton>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <XIcon />
          </ListItemButton>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <GithubIcon />
          </ListItemButton>
          <ListItemButton
            role="menuitem"
            component="a"
            href="#horizontal-list"
            aria-label="Profile"
          >
            <Person />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
