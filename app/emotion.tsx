"use client";
import { CacheProvider } from "@emotion/react";
import { useEmotionCache, MantineProvider } from "@mantine/core";
import { useServerInsertedHTML } from "next/navigation";

export default function RootStyleRegistry({
  children
}: {
  children: React.ReactNode
}) {
  const cache = useEmotionCache();
  cache.compat = true;
  
  useServerInsertedHTML(() => (
    <style
      data-emotion={
        `${cache.key} ${Object.keys(cache.inserted).join(" ")}`
      }
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <MantineProvider 
      withGlobalStyles 
      withNormalizeCSS
      theme={{
        colors: {
          'dark-yellow': ['#FFC478', '#FFC478','#FFC478','#FFC478','#FFC478','#FFC478','#FFC478','#FFC478','#FFC478','#FFC478'],
          'light-yellow': ['#F0E5D8', '#F0E5D8','#F0E5D8','#F0E5D8','#F0E5D8','#F0E5D8','#F0E5D8','#F0E5D8','#F0E5D8','#F0E5D8'],
          'dark-green': ['#3F9B84', '#3F9B84', '#3F9B84', '#3F9B84', '#3F9B84', '#3F9B84', '#3F9B84', '#3F9B84', '#3F9B84', '#3F9B84'],
          'light-green': ['#BBDFC8', '#BBDFC8', '#BBDFC8', '#BBDFC8', '#BBDFC8', '#BBDFC8', '#BBDFC8', '#BBDFC8', '#BBDFC8', '#BBDFC8'],
        },
      }}>
        {children}
      </MantineProvider>
    </CacheProvider>
  )
}