import {getServerUrl} from "@/app/_lib/utils";

async function getItems() {
    const res = await fetch(getServerUrl(), {cache: 'no-cache'})
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

export default async function Images() {
    const items = await getItems()
    return (<><h1>SERVER URL: {getServerUrl()} ITEMS: {JSON.stringify(items)} </h1></>)
}
