import { Flex, Heading } from "@/once-ui/components";
import React, { ReactElement } from "react";
import { ResponsiveContainer } from "recharts";
import styles from "./Container.module.scss";

type Props = { title?: string; children: ReactElement };
export default function ChartContainer(props: Props) {
  return (
    <Flex className={styles.container} fillHeight fillWidth direction="column">
      {props.title && (
        <Heading wrap="balance" variant="display-strong-s">
          {props.title}
        </Heading>
      )}
      <ResponsiveContainer width="100%" height="100%">
        {props.children}
      </ResponsiveContainer>
    </Flex>
  );
}

export const colors = {
  stroke: "#56ECAD",
  fill: "#8884d8",
};
