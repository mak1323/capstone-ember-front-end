# Capstone-Ember-Front-End

Welcome to the front end of my capstone project, something that I like to call
Diem. You may notice that our symbol is a carp. I won't explain that here.

This project is designed to give our users, game masters and Dungeon masters,
better game control. Current version, V 0.9 is designed for allowing the said
user to create a text log about current progress in the game.

Not very exciting, huh?

Screenshot:
http://i.imgur.com/heCs7P9.png

Well if you want to know more about future releases, look on the following:

## Future Releases Wireframe and User Stories

### Wireframe

The following is my wireframe:
—Simple:
https://goo.gl/photos/AEvq75s1U9XAwJ2Z6
—Complex:
https://goo.gl/photos/5njvQkMKdasv7kePA

### User Stories

The following is a link to my original user stories:
https://goo.gl/photos/UPwfcXgSDpe8vZoU6

The user stories evolved as I streamlined and figuredd out what I wanted most
as a DM and user--organization.

I wanted to keep all my moments of progress and updates in a single place. This
became the following user stories:

##### As a User I want to:

  Create logs that are brief explainations of what I want to tell myself or my
  players about the last game.

  Keep the logs organized by campaign if I am running more than one campaign.

  Be able see the most recent or updated entries first.

  Have full control of deleting and updating any of my logs.

  Destroy all my logs when I destroy a campaign.

### Upcoming release

The next asset to watch out for is the encounter tracker. The encounter is one of the basic units of tabletop gaming, as it is the action, the meat and potatos, the main stay of the gaming world.

The first one to expect will be a quick encounter, without any crud action. This will be used as the prototype of phase two. The quick encounter will allow a user create a que that will he or she will be able to enter in a monster, a character, a player; then organize and cycle through a que keeping track of how much life a unit has and who's turn it is. Definitely useful for games like Pathfinde, Dungeons and Dragons, Magic the Gathering, or even Smurfs-the Satanic Table Top Rpg For the Apocalypse.

Once this is completed, the next step is allowing a user to track monsters and player characters and upload them to a saved encounter simliar to the how logs work.

## My Approach

I am constantly inspired to create projects that I want to use. I read once that developers should always build for themselves, and I took that to heart. So with that, I planned one massive, complicated project that I knew I could pull off using a traditional borwser template spa. Well, since I was determined to Ember, I had to cut it down.

What I came down to was to create organization first, before the fun stuff. This means I wanted to create my logs and use that for my prototype of the next steps.

So I started with my wireframing and my ORD, which pointed to a one to many one to many relationship. I approached the backend first, modeled my data, and got to work creating my campaigns. After that I created a rough wireframe site (http://i.imgur.com/KFBFVAH.png). I changed my css to have a global shader so i could see where everything lay, a nifty trick.

After that I got to work, generating my routes, mmodifying as needed, and inserting. As soon as I got my full CRUD on campaigns, I got to work on the campaign logs.

Those proved far more difficult, as the index and create functions were nested into the campaigns routes, and that proved a huge hurtle. After putting in an adapter, I got things working. After that, it became a matter of smoothing things out and sanding it down.

I think of web development as building a table. You have to build the api, or the legs if you will that it stands upon. Then you connect those to your table top, your front end. From there, you sand it, prime it, stain it, paint it, and generally mke it look nice. When all else fails, add a table cloth.

## Technologies Used

This project is made with Ember on the front end Rails on the back end. The Ember component is built using the GA-Ember-Auth-Template, which is a fantastic package that streamlined the process.

Ember is the perfect toolset for a project like this because Ember allows us to emulate a much larger, old fashioned, multipage project. For a toolset app, such as this, this is perfect.

However...

## Major Hurtles

Ember is a new framework to myself, as I had only started playing with it right at the start of this project. I knew that I wanted to use it But I didn't know the ins and outs, and I am willing to admit that I still don't. I am much more comfortable than I was before with it, but here are some of the hurtles and issues I ran into.

#### Adapters

My api has a partially nested resource. I did this to allow my campaigns ownership over the logs so I can present data to the front end without as much filtering on the front end. This created a major hurtle of trying to create adapters and modifying routes, but in the end I found ways to both address it head on and to work around the issue.

##### Create Adapter

My create adapter allows me to send my post Requests to the correct, nested api.
This allows for my index and post to ping correctly, while my other CRUD can go to their own seperate urls.

##### Broken routes

Due to the nested nature, I found that I had several broken routes springing up when I wasn't expecting them. This wasn't too big of a deal, but damn I wanted back to go back.

The work around I originally figured out was to nest all of my actions and ceate adapters for each CRUD, but I soon found that to be tedious, and messy. Instead I reverted to  tried and familiar tool, modals. Instead of linking and directing my user to different "pages", I was able to keep the user path much tighter and reduce breakages. This controlled the flow of data up and data down, keeping the ladder far shorter and more traceable.


##### Unsure of Data Storage

One big hurtle that I didn't need to address as much with this project was how I am storing data on the front end aside from getting everytime I need data. My next phase of the project looks to solve this, and take greater control of Ember through a stronger knowledge of integrating traditional JavaScripting into the streamline of Ember.



## Original Pitch

My original pitch was created on Github through an issue.
The link is:
https://github.com/ga-wdi-boston/capstone-project/issues/792

The content is as follows:
"This is my 1:1 request

My project idea is a Dungeons and Dragons (3.5) encounter tracker.

The inspiration for this project is that this is something that I actually want, I would definitely use, and it solves a problem that occurs when I’m DMing: “Who’s turn is it again?”

The following is a link to my user stories:
https://goo.gl/photos/UPwfcXgSDpe8vZoU6

The target audience and user is a Dungeon Master or Game Master.

The following is a link to my ERD:
—Simple:
https://goo.gl/photos/niyfENCWbDUAqh1D6
—Complex:
https://goo.gl/photos/GVUNz2QMHpDd9S6P8

The following is my wireframe:
—Simple:
https://goo.gl/photos/AEvq75s1U9XAwJ2Z6
—Complex:
https://goo.gl/photos/5njvQkMKdasv7kePA

I’m modeling my data as follows:
https://goo.gl/photos/yPK5fWNWRYCRbWgv6

I have yet to model my encounter data but I’m thinking it will look like:

|id|user_id|campaign_id|encounter_data|

encounter_data
```
[
	{
	type: (char or monster),
	id: (char_id or monster_id),
	activeHp: num,
	initiative: num,
	isActive: bool,
	currentTurn: bool,
	},
	{
	type: (char or monster),
	id: (char_id or monster_id),
	activeHp: num,
	initiative: num,
	isActive: bool,
	currentTurn: bool,
	},
	{
	type: (char or monster),
	id: (char_id or monster_id),
	activeHp: num,
	initiative: num,
	isActive: bool,
	currentTurn: bool,
	}
]
```
The idea here is to create a nested schema expecting an array. This way I don’t straight modify the characters here in the game. I do however create new stats that are only prevalent to the scope of the current encounter.

I use this to allow myself to load characters and monsters generated by the user, allowing for full customization and full access of crud.

I know how to approach this project using Browser Template, but I’m not sure about ember. I designed my wireframe with ember in mind, but I’m entirely sure how to approach some of the js functions using ember.

My current plan of attack is to create two or three repos. First I want to get my backend working and test that using my browser template crud action ability. Once I know all my backend and crud is working, I either want to make a new front end using ember or using browser template."

## Conclusion

This project was both a challenge and a joy. I learned more in this project than I had in any other, but at the same time I felt more methodical in approaching this project than any other. To say that this course wasn't a challenge is a lie, as I am not a methodical thinker to the point of a programmer. Working bars, class rooms, and such has gotten me more to be a methodical big picture thinker. Here, I finally feel like a web developer.

# capstone-ember-front-end
