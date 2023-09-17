# Meal Suggestion App Mobile Pagination - Level 1

This is a recreation of a meal suggestion app as described in the challenge.

"Your task is to build a meal roulette app that integrates with the Meal Roulette API and presents the retrieved data. Please agree with your hiring team regarding the tech stack choice.
The app should have a meal selection view and a meal details view.
Tapping on the refresh button should present a selection of the next 4 meals.
Tapping on a meal on the list should open the details view for that meal.
There should also be a way to navigate back to the list view from the details view.
When finished developing make sure to add a screen recording + executable (.apk or .app depending on the platform choice) to the repo."

## Mockup

![meal-roulette](https://user-images.githubusercontent.com/1162212/114553140-9fb4fa80-9c65-11eb-91ae-ce30dc3522b7.png)

## MY app

![image](https://github.com/ffc1e12/meal-roulette-app-mobile-pagination-level-1_de09c64-6h93g5/assets/113394429/f6408c72-2a82-44c5-a32b-aba49e47e5a6)

# dessissions & thought process

The task was supposed to be completed in 3 hours, but it took a bit longer than I expected. I had to rethink how to display 4 meals at a time, and I ended up creating a function that calculates the next index by adding 4 to the current index and taking the remainder when divided by the total number of meals in the meals array. This ensures that if you reach the end of the meals, it loops back to the beginning. It took me a bit of time to find a way to make it work properly.

Secondly, I haven't used Tailwind that much, and therefore, converting the thought process from regular CSS to Tailwind becomes time-consuming. The overall design is kind of basic, but I think it is suitable for a project with this time limit.

Sadly, I could not achieve one of the expected goals, which was to build it as an APK or iOS app. I don't have any experience with it, and with this time constraint, I do not have the time to look it up.

# App DEMO

https://github.com/Willi0t/meal-roulette-app/assets/113394429/b94cd048-10ef-4ee1-ae48-d33fe7415340

---

# Running locally in development mode

If you want to run this site in production, you should install modules then build the site with npm run build and run it with npm start:

npm install
npm run build
npm start
You should run npm run build again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. PORT=3000 npm start).
