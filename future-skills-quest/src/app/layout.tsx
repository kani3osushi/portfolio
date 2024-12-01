"use client";

import { Provider } from "@/components/ui/provider";
import { queryClient } from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <html suppressHydrationWarning>
      <body>
        <QueryClientProvider client={queryClient}>
          <Provider>{children}</Provider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
