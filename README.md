## Retrospective

While I'm generally happy with the quality of the code, and the amount of features completed, there are a few things I would take the opportunity to clean up, or change if there were extra time.

Some of the names of components deviated a bit too much from their intended uses, or aren't clear enough on their purpose. I think some of the prime examples of these are MainNav, ProductNav, and GridCard. GridCard especially feels like the name is a bit too generic. It's implemented very specifically for the workout tiles, and thus should probably be named WorkoutCard or something similar.

Additionally there are a couple smaller features or optimizations I would have liked to make as well. The carousel is functional, but doesn't animate the cards as they change position. This can be a bit jarring from the user's end, and is something I would prefer to add. Image assets and how they're accessed/used could be better. using CRA's `PUBLIC_URL` env var allows for the code to be less cluttered by image imports, but also bypasses Webpack's minification for assets.

Lastly there are a couple things in the mobile version of the layout that I would tweak. Most notably the carousel cards, as they are a bit too tall when using `vw` units as their width, and some of the reviewer's logos overflow the card on a small enough viewport. On the workout cards "View Details" should probably always be visible on mobile viewports since there is no hover functionality. The legal section at the bottom also isn't ideal. Moving the i18n dropdown above the legal info and giving them a bit more padding between each other seems like a good potential fix here.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
