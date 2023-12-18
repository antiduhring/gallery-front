import {getServerUrl} from "@/app/_lib/utils";

export default function Images() {
    const serverUrl = getServerUrl()
    return (<><h1>SERVER URL: {serverUrl}</h1></>)
}
