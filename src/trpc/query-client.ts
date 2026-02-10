import {
  defaultShouldDehydrateQuery,
  QueryClient,
} from '@tanstack/react-query';
/**
 * Create a preconfigured TanStack QueryClient with sensible defaults for caching and dehydration.
 *
 * @returns A QueryClient whose queries use a 30-second staleTime and whose dehydrate logic treats a query as dehydratable when the default criteria pass or when the query's state.status is `'pending'`.
 */
export function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 30 * 1000,
      },
      dehydrate: {
        // serializeData: superjson.serialize,
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === 'pending',
      },
      hydrate: {
        // deserializeData: superjson.deserialize,
      },
    },
  });
}