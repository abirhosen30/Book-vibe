"use client";

import { BooksContext } from "@/context/BooksContext";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  BarShapeProps,
  CartesianGrid,
  Label,
  LabelList,
  LabelProps,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

const getPath = (
  x: number,
  y: number,
  width: number,
  height: number
) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
     ${x + width / 2},${y + height / 3}
     ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
     ${x + (2 * width) / 3},${y + height}
     ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = (props: BarShapeProps) => {
  const {
    x = 0,
    y = 0,
    width = 0,
    height = 0,
    index = 0,
    isActive,
  } = props;

  const color = colors[index % colors.length];

  return (
    <path
      d={getPath(
        Number(x),
        Number(y),
        Number(width),
        Number(height)
      )}
      stroke={color}
      fill={color}
      strokeWidth={isActive ? 5 : 0}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const CustomColorLabel = (props: LabelProps) => {
  const index = props.index ?? 0;
  const fill = colors[index % colors.length];

  return <Label {...props} fill={fill} />;
};

const ReadBooks = () => {
  const context = useContext(BooksContext);

  if (!context) {
    throw new Error(
      "ReadBooks must be used inside BooksProvider"
    );
  }

  const { readBooks } = context;

  const data = readBooks.map((book, index) => ({
    name: book.bookName,
    uv: book.totalPages,
    pv: index + 1,
    amt: index + 1,
  }));

  return (
    <div className="container mx-auto flex w-full items-center justify-center gap-4 py-6">
      {readBooks.length > 0 ? (
        <BarChart
          style={{
            width: "100%",
            maxWidth: "100%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />

          <Tooltip cursor={{ fillOpacity: 0.5 }} />

          <XAxis dataKey="name" />

          <YAxis width="auto" />

          <Bar
            dataKey="uv"
            shape={TriangleBar}
            activeBar
          >
            <LabelList
              content={CustomColorLabel}
              position="top"
            />
          </Bar>
        </BarChart>
      ) : (
        <p className="text-center text-4xl font-bold">
          No read books to display.
        </p>
      )}
    </div>
  );
};

export default ReadBooks;