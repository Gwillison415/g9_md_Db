This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Set Up
Install current versions of node \n
Clone the project directory and run `yarn`:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Design Decisions & Challenges
I chose a Material UI as a CSS library -reasoning that a snappy UX with a 'good enough' UI was my best avenue for going deeper into other aspects of the coding challenge.
It gave me access to 'SwipeableDrawer' which is optimized for mobile screens.

I went with the standard flex box design provided by material, such that it works out of the box on multiple breakpoints. 

I leaned on Redux as a global state container so that I  could A) drive props only where I need them B) travel through actions to understand state C) because I can do it in my sleep. 

Debouncing results was a challenge for me. I strongly considered redux-saga for debouncing the search bar that Displays visual results as the user types. After hooking it up However, in the end I couldn't justify it's overhead / 'wetwear cost' when compared with ```React.useCallback + lodash/debounce``` to create ```debounceHandleSearch``` in just a few lines. I might make different decisions on a larger app where more was going on, but I always need to consider KISS if possible and make it more straightforward on other developers. All that being said, I am still using thunks..

I felt I needed react-router-dom to fulfill the legal requirements of the API I was accessing - you'll see the license adhered to on the /about page.

axios has a lot of safegaurds built right in, so I used an instance of axios to demonstrate best practices: separation of concerns / code organization / DRY patterns

Speaking of DRY - I separated components where they made logical sense to do so.. 

I have connected components, 'dumb' components, hooks, effects, curried functions. 1 thing I was sad about not getting from the api was photo assets - i'm guessing that costs $$ the```MediaCard``` component should be able to load and then fetch the photo, to give the user the feeling of more things & faster

Speaking of more things and faster - What I would continue to do - to improve this app would be tests, ```<Suspense> & <Lazy>``` components for infinite scroll and a little cache to remember recent searchs and serve those right back to the user. 


### `yarn test`
