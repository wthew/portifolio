"use client";

import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts";
import ChartContainer, { colors } from "./Container";

const data = [
  {
    subject: "Typescript",
    value: 97,
    fullMark: 100,
  },
  {
    subject: "C++",
    value: 50,
    fullMark: 100,
  },
  {
    subject: "Linux",
    value: 93,
    fullMark: 100,
  },
  {
    subject: "Python",
    value: 65,
    fullMark: 100,
  },
  {
    subject: "MongoDB",
    value: 79,
    fullMark: 100,
  },
  {
    subject: "Lua",
    value: 50,
    fullMark: 100,
  },
  {
    subject: "Graphql",
    value: 76,
    fullMark: 100,
  },
];

export default function KnownledgeChart() {
  return (
    <ChartContainer>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid opacity={0.1} stroke={colors.stroke} strokeWidth={1.5} />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="value" {...colors} fillOpacity={0.5} strokeWidth={2} />
      </RadarChart>
    </ChartContainer>
  );
}
