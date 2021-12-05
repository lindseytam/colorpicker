const colorpickerCode = (shape, color, height) => { 
return `
<ColorPicker  
    shape=${shape} 
    defaultColor=${color} 
    height=${height} 
    onChange={handleChange}/>
/>
`
}

const importCode = `import colorpicker from 'shapely-colorpicker';`
const installCode = `$ npm install shapely-colorpicker`


export {colorpickerCode, importCode, installCode};