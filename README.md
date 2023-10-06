# @opeepsfun/avatar-illustration-system

![npm](https://img.shields.io/npm/v/@opeepsfun/avatar-illustration-system)
![license](https://img.shields.io/npm/l/@opeepsfun/avatar-illustration-system)

## Description

Introducing the `@opeepsfun/avatar-illustration-system`, a pure JavaScript npm package that powers an avatar illustration system. This package provides an API to create unique, hand-drawn avatar illustrations which can be used in a myriad of applications such as user profiles, product illustrations, or any creative project you envision. No external libraries are required, making it a seamless addition to any project, irrespective of the tech stack.

The illustrations are designed by [Micah Lanier](https://www.figma.com/@micah). Explore the beautiful artwork and get inspired!

## Try It Out

You can delve into the creative world of avatars by heading to the [official builder](https://beta.opeeps.fun/collections/avatar-illustration-system). Explore and interact with various options to create personalized avatars, get a hands-on experience, and see all the features in action.

## Installation

Getting started is a breeze. Install the package via npm with the following command:

```bash
npm install @opeepsfun/avatar-illustration-system
```

## Usage

Here's a simplistic example to kickstart your creativity:

```javascript
import Avatar from "@opeepsfun/avatar-illustration-system";

const avatar = Avatar({
    circle: { backgroundColor: "brown" },
    size: 600,
    glasses: "Square",
    ear: "Attached",
    eye: "Round",
    shirt: "Crew"
});

const parser = new DOMParser();
const svgDOM = parser.parseFromString(avatar, "image/svg+xml");

document.getElementById("illustration").appendChild(svgDOM.documentElement);
```

In this snippet, we import the Avatar module, configure the avatar properties, parse the generated SVG string into a DOM element, and append it to a designated HTML element.

## Features

1. **Pure JavaScript:**

    - Being a pure JavaScript library, it can effortlessly integrate with any project, regardless of the underlying libraries or frameworks.

2. **Vast Customization:**

    - From facial features to clothing, a broad spectrum of customizable options allows for the creation of unique avatars.

3. **Dynamic Rendering:**

    - The system dynamically renders SVG elements based on the specified properties, ensuring optimal performance and versatility.

4. **Seamless Integration:**

    - The package is designed for easy integration into existing projects, with no additional dependencies required.

5. **SVG Output:**
    - The avatars are generated as SVG elements, ensuring crisp visuals and scalability across devices.

### Components and Props

The `Avatar` function accepts an object with the following properties:

-   **size:** Required. Specifies the size of the avatar.
-   **circle:** Optional. An object specifying background color of a circular mask.
-   **ear:** Optional. Specifies the type of ears.
-   **mouth:** Optional. Specifies the type of mouth.
-   **nose:** Optional. Specifies the type of nose.
-   **glasses:** Optional. Specifies the type of glasses.
-   **eyebrow:** Optional. Specifies the type of eyebrows.
-   **eye:** Optional. Specifies the type of eyes.
-   **shirt:** Optional. Specifies the type of shirt.
-   **top:** Optional. Specifies the type of top.

## Build

To build the project, run:

```bash
npm run build
```

## Plans

Coloring of the pieces is on the roadmap to offer even more customization and vibrancy to the avatars.

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

MIT

## Author

- Emre Çakır
- [Homepage](https://opeeps.fun)
