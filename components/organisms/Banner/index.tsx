"use client";
import React from "react";
import { Alert, Card } from "flowbite-react";
const Banner: React.FC<{ title: string; described: string }> = ({
  title,
  described,
}) => {
  return (
    <div className="relative">
      <Alert color="info">
        <span className="font-medium">Info alert!</span> Change a few things up
        and try submitting again.
      </Alert>
      <Card href="#" className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
};

export default Banner;
