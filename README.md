# JSCAD Playground

```sh
npm run dev
```

> 🧑‍🚀 **Want to try it yourself?** Run the above command!

## 🚀 Project Structure

Inside, you'll see the following folder structure:

```text
/
├── public/
├── src/
│   └── components/
│   └── data/
│   └── js/
│   └── layouts/
│   └── pages/
│       
└── package.json
└── taiwind.config.mjs
```

In the components/ folder, you will find individual components, each rendering a key element of the project. In data/, we have all the information for Monaco to interpret the new JSCAD commands. js/ contains the geometry converter. The layouts/ and pages/ folders unify the components and build the entire page.

## 👀 More Info

This project arose because I needed a good way to store code information without having to copy all the code and perform the corresponding renderings. In this project, we have the feature that the code is saved in the URL, so you will only have to save the link to access your code!