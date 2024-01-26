"use client";
 import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Layout } from "../components/layout/layout";
import { Toaster } from "react-hot-toast";
import {
    ApolloProvider,
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    from,
    NormalizedCacheObject,
} from "@apollo/client";

const httpLink = createHttpLink({
    uri: "http://aman.francecentral.cloudapp.azure.com:8080/graphql",
});

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    link: from([httpLink]),
    cache: new InMemoryCache(),
});

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
     <NextUIProvider>
        <ApolloProvider client={client}>
          <NextThemesProvider defaultTheme="system" attribute="class" {...themeProps}>
            <Layout>
              {children}
            </Layout>
            <Toaster position="top-center" />
          </NextThemesProvider>
        </ApolloProvider>
    </NextUIProvider>
 
  );
}
