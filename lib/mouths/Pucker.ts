const Pucker = {
    name: "Pucker",
    props: {},
    width: 64,
    height: 64,
    draw: (outlineColor = "#171921", skinColor = "#AC6651") => {
        return `
            <path d='M26 16.6965C30.1667 14.3631 47 11.3964 47 18.1964C47 26.6964 35.5 26.1965 35.5 26.1965C35.5 26.1965 48.5447 23.0354 46 32.1965C43.5 41.1965 36.5 37.6965 34.5 36.6965' stroke='black' stroke-width='4' />
        `;
    }
};

export default Pucker;
