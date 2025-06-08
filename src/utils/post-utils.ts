import type { CollectionEntry, CollectionKey } from 'astro:content'

type Collections = CollectionEntry<CollectionKey>[]

export function sortPostsByTop(collections: Collections): Collections {
  return sortPostsByPublishDate(collections).sort((a, b) => {
    return b.data.top - a.data.top
  })
}

export function sortPostsByPublishDate(collections: Collections): Collections {
  return collections.sort((a, b) => {
    const aDate = new Date(a.data.publishDate ?? 0).valueOf()
    const bDate = new Date(b.data.publishDate ?? 0).valueOf()
    return bDate - aDate
  })
}

export function groupCollectionsByTop<T extends CollectionKey>(
  collections: Collections
): [number, CollectionEntry<T>[]][] {
  const collectionsByYear = collections.reduce((acc, collection) => {
    const top = collection.data.top
    if (!acc.has(top)) {
      acc.set(top, [])
    }
    acc.get(top)?.push(collection)
    return acc
  }, new Map<number, Collections>())

  return Array.from(
    collectionsByYear.entries() as IterableIterator<[number, CollectionEntry<T>[]]>
  ).sort((a, b) => b[0] - a[0])
}
