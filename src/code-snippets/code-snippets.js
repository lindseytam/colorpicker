const colorpickerCode = (shape, color, height) => { 
return `import ColorPicker from 'shapely-colorpicker';

const [color, setColor] = useState("${color}")

const handleChange = (change) => {
    setColor(change)
}

<ColorPicker  
    shape="${shape}" 
    defaultColor="${color}" 
    height={${height}}
    onChange={handleChange}
/>
`
}
const installCode = `npm install shapely-colorpicker`


export {colorpickerCode, installCode};