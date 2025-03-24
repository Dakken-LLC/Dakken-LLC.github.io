import logoSrc from "@/assets/dakken_llc_logo_3_w.png";
import useIsTop from "@/hooks/useIsTop";
import type { StackProps } from "@chakra-ui/react";
import {
  Box,
  Container,
  HStack,
  Image,
  List,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { IoMailOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router";

export default function Header() {
  const isTop = useIsTop();
  const { open, onToggle, setOpen } = useDisclosure();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location, setOpen]);

  return (
    <>
      <VStack
        as="header"
        h="header-height"
        w="full"
        pos="sticky"
        top="0"
        zIndex="modal"
      >
        <Box
          w="inherit"
          transition="all 0.5s, border-bottom 0s"
          data-is-top={isTop}
          data-is-opened={open}
          css={{
            "&[data-is-top=false]": {
              bgColor: "gray.900/60",
              borderBottom: "3px solid #d34b4b",
              backdropFilter: "blur(5px)",
            },
            "&[data-is-opened=true]": {
              h: "280px",
              bgColor: "gray.900/60",
              borderBottom: "3px solid #d34b4b",
              backdropFilter: "blur(5px)",
              zIndex: "modal",
            },
          }}
        >
          <Container maxW="6xl">
            <HStack alignItems="flex-start" justifyContent="space-between">
              <Box
                h="header-height"
                w="150px"
                display="flex"
                alignItems="center"
              >
                <Link to="/">
                  <Image src={logoSrc} h="60px" userSelect="none" />
                </Link>
              </Box>

              <List.Root
                as="nav"
                fontSize="lg"
                fontWeight="semibold"
                listStyle="none"
                pos="relative"
                display="flex"
                alignItems="center"
                justifyContent={{ base: "center", md: "flex-end" }}
                gap={{ base: "1", md: "6" }}
                flexDir={{ base: "column", md: "row" }}
                transition="all 0.5s"
                overflow="hidden"
                data-is-open={open}
                css={{
                  "&[data-is-open=true]": {
                    mt: "40px",
                    h: "opened-header-height",
                    left: "-25px",
                  },
                  "&[data-is-open=false]": {
                    h: { base: "0", md: "header-height" },
                    left: "-25px",
                  },
                }}
              >
                <ListItem title="会社案内" href="/about" />
                <ListItem title="サービス" href="/service" />
                <ListItem title="記事一覧" href="/article" />
                <ListItem
                  title="お問い合わせ"
                  href="/contact"
                  icon={<IoMailOutline color="black" />}
                />
              </List.Root>

              <HamburgerButton
                onToggle={onToggle}
                isOpen={open}
                display={{ base: "flex", md: "none" }}
                h="header-height"
                w="95px"
                align="end"
                justify="center"
                cursor="pointer"
              />
            </HStack>
          </Container>
        </Box>
      </VStack>

      <Box
        zIndex="overlay"
        pos="fixed"
        top="0"
        left="0"
        h="100vh"
        w="full"
        display="none"
        data-is-open={open}
        css={{
          "&[data-is-open=true]": {
            display: "block",
          },
        }}
        onClick={onToggle}
      />
    </>
  );
}

function HamburgerButton({
  isOpen,
  onToggle,
  ...props
}: {
  isOpen: boolean;
  onToggle: () => void;
} & StackProps) {
  return (
    <VStack onClick={onToggle} gap="1.5" {...props}>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <Box
            key={i}
            w="30px"
            h="4px"
            bgColor="white"
            transition="0.4s"
            data-is-open={isOpen}
            css={{
              "&[data-is-open=true]": {
                _first: { transform: "rotate(45deg) translate(6px, 8px)" },
                _even: { transform: "translateX(15px)", opacity: 0 },
                _last: { transform: "rotate(-45deg) translate(6px, -8px)" },
              },
            }}
          />
        ))}
    </VStack>
  );
}
function ListItem({
  title,
  href,
  icon,
}: {
  title: string;
  href: string;
  icon?: React.ReactNode;
}) {
  return (
    <List.Item
      pos="relative"
      display="flex"
      flexDir="row"
      alignItems="center"
      justifyContent="center"
      gap="1"
      color="gray.50"
      py="2"
      _hover={{
        color: "red.600",
        _after: {
          w: "full",
        },
      }}
      _after={{
        content: "''",
        position: "absolute",
        bottom: "0.5",
        left: 0,
        w: "0",
        h: "1.5px",
        bgColor: "red.600",
        transition: "0.3s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      _last={{
        bgColor: "white/90",
        px: "3",
        "&>a": {
          color: "black",
        },
        _hover: {
          bgColor: "#be4141",
        },
      }}
      transition="0.3s"
    >
      <Link to={href}>
        <span>{title}</span>
      </Link>
      {icon && <span>{icon}</span>}
    </List.Item>
  );
}
