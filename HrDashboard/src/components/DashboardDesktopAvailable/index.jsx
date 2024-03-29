import React from "react";
import { Text } from "./..";

export default function DashboardDesktopAvailable({
  available = "Available Position",
  twentyfour = "24",
  p4urgently = "4 Urgently needed",
  ...props
}) {
  return (
    <div {...props}>
      <Text size="xl" as="p" className="ml-2 md:ml-0 !text-black-900_33">
        {available}
      </Text>
      <Text size="3xl" as="p" className="ml-2 md:ml-0 !text-black-900_33">
        {twentyfour}
      </Text>
      <Text size="lg" as="p" className="mb-0.5 ml-2 md:ml-0 !text-red-A200 !font-roboto">
        {p4urgently}
      </Text>
    </div>
  );
}
