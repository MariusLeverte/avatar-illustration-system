const RoundGlasses = {
    name: "Round",
    props: {},
    width: 152,
    height: 65,
    draw: (outlineColor = "#171921", skinColor = "#AC6651") => {
        return `
            <circle cx='123.5' cy='28' r='26' stroke='black' stroke-width='4' />
            <circle cx='56.5' cy='37' r='26' stroke='black' stroke-width='4' />
            <path d='M98.5 35C98.5 32.8783 97.6571 30.8434 96.1569 29.3431C94.6566 27.8429 92.6217 27 90.5 27C88.3783 27 86.3434 27.8429 84.8431 29.3431C83.3429 30.8434 82.5 32.8783 82.5 35' stroke='black' stroke-width='4' />
            <path d='M31 39L1 44.5' stroke='black' stroke-width='4' />
        `;
    }
};

export default RoundGlasses;
