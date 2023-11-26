// SVGImage.js
import { useEffect } from 'react';

export default function SVGImage({ src }) {

    useEffect(() => {
        // Dynamically import SVG as URL
        const importSVG = async () => {
            const svgData = await fetch(src).then(data => data.text());
            document.getElementById('svg').innerHTML = svgData;
        }
        importSVG();
    }, [src])

    return (
        <div id="svg" />
    )
}