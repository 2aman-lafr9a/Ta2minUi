import { Card, CardBody } from "@nextui-org/react";
import React from "react";

interface CustomCardProps {
  header: React.ReactNode;
  body: React.ReactNode;
  footer?: React.ReactNode;
}

export const HomeCard: React.FC<CustomCardProps> = ({ header, body, footer }) => {
  return (

    <Card className="xl:max-w-sm bg-primary rounded-xl shadow-md">
    <div className="flex flex-col items-center justify-center h-full p-4">
      {header}
      <CardBody className="py-4">{body}</CardBody>
      {footer && <div className="card-footer py-2">{footer}</div>}
    </div>
  </Card>
  );
  
};

 