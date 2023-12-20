import {getServerUrl} from "@/app/_lib/utils";
import {Item} from "@/app/_lib/model";
import {GalleryImage} from "@/app/_components/GalleryImage";

async function getItems(): Promise<Item[]> {
  const res = await fetch(getServerUrl(), {cache: 'no-cache'})
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Images() {
  const items = await getItems()
  return (<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {items.map(item => (
        <div key={item.id}>
          <GalleryImage
              src={item.imageUrl}
              alt={item.name}
              className="h-auto max-w-full rounded-lg"
          />
        </div>
    ))}
  </div>)
}
