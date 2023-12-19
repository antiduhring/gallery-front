import {ImageProps} from "next/image";
import {SERVER_URL} from "@/app/_lib/utils";

export function GalleryImage({className, src, alt}: ImageProps) {
    return <img className={className}
                src={`${SERVER_URL}${src}`}
                alt={alt}/>
}
