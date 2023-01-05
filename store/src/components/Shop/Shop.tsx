import React from "react";
import { IconButton } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

interface ShopProps{
  counter: number
}

const Shop: React.FC<ShopProps> = ({counter}) =>  {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={counter} color="primary">
        <ShoppingCartIcon style={{ fontSize: 40 }} />
      </StyledBadge>
    </IconButton>
  );
}

export default Shop;
