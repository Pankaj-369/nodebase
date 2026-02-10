import { getQueryClient, trpc } from "@/trpc/server";
import { Client } from "./client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";

/**
 * Server-rendered page that prefetches the users query and renders a hydration boundary containing the client component.
 *
 * @returns A JSX element that provides dehydrated react-query state and renders the Client component inside a Suspense boundary.
 */
export default async function Home () {
  const queryClient = getQueryClient();

  void queryClient.prefetchQuery(trpc.getUsers.queryOptions());

  return (
    <div className="min-h-screen min-w-screen 
    flex items-center justify-center"> 
    <HydrationBoundary state={dehydrate(queryClient)}>
    <Suspense fallback={<p>loading..</p>} >
      <Client/>
      </Suspense>
    </HydrationBoundary>
    </div>
  )
}