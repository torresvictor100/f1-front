// Chakra imports
import {
  Flex,
  Stat,
  StatLabel,
  StatNumber,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card";
import { ReactNode } from "react";

export default function Default(props: {
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  title: string;
  name: string;
  growth?: string | number;
  value: string | number;
  hasSelect?: boolean;
  selectElement?: ReactNode;
}) {
  const {
    startContent,
    endContent,
    title,
    name,
    growth,
    value,
    hasSelect = false,
    selectElement = <></>,
  } = props;
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "secondaryGray.600";

  return (
    <Card py="15px">
      <Flex
        my="auto"
        h="100%"
        align={{ base: "center", xl: "start" }}
        justify={{ base: "center", xl: "center" }}
      >
        {startContent}

        <Stat my="auto" ms={startContent ? "18px" : "0px"}>
          <StatLabel
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
          >
            {name}
          </StatLabel>
          <StatLabel
            lineHeight="100%"
            color={textColorSecondary}
            fontSize={{
              base: "sm",
            }}
          >
            {title}
          </StatLabel>
          <StatNumber
            color={textColor}
            fontSize={{
              base: "2xl",
            }}
          >
            {value}
          </StatNumber>
          {growth ? (
            <Flex align="center">
              <Text color="green.500" fontSize="xs" fontWeight="700" me="5px">
                {growth}
              </Text>
              <Text color="secondaryGray.600" fontSize="xs" fontWeight="400">
                since last month
              </Text>
            </Flex>
          ) : null}
        </Stat>
        <Flex ms="auto" w="max-content">
          {endContent}
        </Flex>
      </Flex>
      {hasSelect && <>{selectElement}</>}
    </Card>
  );
}
