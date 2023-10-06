const EllipseShadow = {
    name: "EllipseShadow",
    props: {},
    width: 96,
    height: 49,
    draw: (outlineColor = "#171921", skinColor = "#AC6651") => {
        return `
        <circle cx='15.2398' cy='21.2394' r='12' transform='rotate(-6.27568 15.2398 21.2394)' fill='#D2EFF3' />
        <ellipse cx='16.5301' cy='30.4023' rx='9' ry='13.5' transform='rotate(-6.77646 16.5301 30.4023)' fill='black' />
        <circle cx='79.0191' cy='12.6105' r='12' transform='rotate(-6.27568 79.0191 12.6105)' fill='#D2EFF3' />
        <ellipse cx='80.5312' cy='20.4021' rx='9' ry='13.5' transform='rotate(-6.27568 80.5312 20.4021)' fill='black' />
        `;
    }
};

export default EllipseShadow;
