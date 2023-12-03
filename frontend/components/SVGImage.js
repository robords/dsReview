// SVGImage.js
import { useEffect } from 'react';

export default function SVGImage({ src }) {

    useEffect(() => {
        // Dynamically import SVG as URL
        const importSVG = async () => {
            const env = process.env.NODE_ENV;
            const svgData = await fetch(src)
                .then(data => data.text());
            if (env === "development") {
                const updatedUrl = "http://localhost:3000"
                let updatedSvgData;
                updatedSvgData = svgData.replaceAll("https://dsreview.pages.dev", updatedUrl);
                document.getElementById('svg').innerHTML = updatedSvgData;
            } else {
                const updatedUrl = "https://dsreview.pages.dev"
                let updatedSvgData;
                updatedSvgData = svgData.replaceAll("https://dsreview.pages.dev", updatedUrl);
                document.getElementById('svg').innerHTML = updatedSvgData;
            }
        }
        importSVG();
    }, [src])

    return (
        <div id="svg" />
    )
}