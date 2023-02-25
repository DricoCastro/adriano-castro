import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { Divider, IconButton, Menu } from "@mui/material";
import {
  HeaderContainer,
  HolderLogoHeader,
  HolderMenuIcon,
  HolderTitlesHeader,
  HomeHeaderHolder,
  MenuItemStyledComponent,
  TitleContainer,
  TitleMenuDrawer,
  TitlesHeader,
} from "./styles";
import { PrimaryIcon } from "@/web/components/PrimaryIcon";
import { IconsEnum } from "@/web/components/PrimaryIcon/enum/icons";
import { COLORS } from "@/colors/colors";

const logoLetterWhite = require("../../../../../public/svgs/AC-white.svg");

export const DefaultHeader = () => {
  const [drawer, setDrawer] = useState<null | HTMLElement>(null);
  const openDrawer = drawer !== null;
  const router = useRouter();
  function openUserMenu(event: React.MouseEvent<HTMLElement>) {
    setDrawer(event.currentTarget);
  }
  const handleClose = () => {
    setDrawer(null);
  };
  function onTapHome() {
    router.push("/");
  }
  return (
    <HomeHeaderHolder>
      <HeaderContainer>
        <HolderLogoHeader>
          <Image
            width={60}
            height={60}
            style={{ cursor: "pointer" }}
            onClick={onTapHome}
            src={logoLetterWhite}
            alt="letterLogo"
          ></Image>
        </HolderLogoHeader>
        <HolderTitlesHeader>
          <TitleContainer>
            <TitlesHeader>ME</TitlesHeader>
          </TitleContainer>
          <TitleContainer>
            <TitlesHeader>PROJECTS</TitlesHeader>
          </TitleContainer>
          <TitleContainer>
            <TitlesHeader>CERTIFICATES</TitlesHeader>
          </TitleContainer>
          <TitleContainer>
            <TitlesHeader>WHY ME?</TitlesHeader>
          </TitleContainer>
          <TitleContainer>
            <TitlesHeader>LETS TALK</TitlesHeader>
          </TitleContainer>
        </HolderTitlesHeader>
        <HolderMenuIcon>
          <IconButton
            onClick={openUserMenu}
            size="large"
            sx={{ ml: 0 }}
            aria-controls={openDrawer ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openDrawer ? "true" : undefined}
          >
            <PrimaryIcon
              size={"25px"}
              icon={IconsEnum.MENU_ICON}
              fill={COLORS.royalBlue}
            />
          </IconButton>
        </HolderMenuIcon>
        <Menu
          anchorEl={drawer}
          id="account-menu"
          open={openDrawer}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 4px 8px var(--biscay))",
              borderRadius: "10px",
              width: "230px",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              mt: 1.5,
              "@media (min-width: 1250px)": {
                display: "none",
              },
              "&:before": {
                // eslint-disable-next-line quotes
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 10,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <div>
            <MenuItemStyledComponent onClick={() => {}}>
              <TitleMenuDrawer>ME</TitleMenuDrawer>
            </MenuItemStyledComponent>
            <Divider style={{ width: "230px" }} />
            <MenuItemStyledComponent onClick={() => {}}>
              <TitleMenuDrawer>PROJECTS</TitleMenuDrawer>
            </MenuItemStyledComponent>
            <Divider />
            <MenuItemStyledComponent onClick={() => {}}>
              <TitleMenuDrawer>CERTIFICATES</TitleMenuDrawer>
            </MenuItemStyledComponent>
            <Divider />
            <MenuItemStyledComponent onClick={() => {}}>
              <TitleMenuDrawer>WHY ME?</TitleMenuDrawer>
            </MenuItemStyledComponent>
            <Divider />
            <MenuItemStyledComponent onClick={() => {}}>
              <TitleMenuDrawer>LETS TALK</TitleMenuDrawer>
            </MenuItemStyledComponent>
          </div>
        </Menu>
      </HeaderContainer>
    </HomeHeaderHolder>
  );
};
