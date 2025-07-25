"use client";
import { SessionProvider } from "next-auth/react";
import React, { FC, ReactNode } from "react";

const SessionProviderWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionProviderWrapper;
