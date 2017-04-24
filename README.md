A Website for Nam
====

### Nam Wayne

Nam is a longtime friend. He's a hyper-talented artist, who has worked successfully on so many mediums, from documentaries, to mural paintings to making music.

[Soundcloud](https://soundcloud.com/user-904682438)

[Bandcamp](https://namwayne.bandcamp.com/releases)

This site focuses on his current music and promotional outreach materials. I told him I'd bake him a site that would be free, late, and low-quality. I'm actually going to make him a nice site, but just in case, it's important to manage everyone's expectations and keep friendships intact.

Currently the site is hosted [here at Heroku](https://nam-wayne.herokuapp.com/) during testing and the build out. It's got a bit of a slow first load, as the free tier I enjoy at Heroku puts my apps to sleep until that first `get request`. After that initial load it should be pretty good.

1. Initially I just set up a page with a `node.js` backend and `index.html` view being rendered. Now that Nam has had a chance to look at that, and is ok with everything, I started up another branch called `react` where I am beginning to wire up the react entry point and directory skeleton to begin the project in ernest. I will merge the `react` branch into `master` once it is up and running. 

### Project Goals

- Have a landing/splash page for him to direct social media, share content, and more to supporters
- Integrate with Nam's Soundcloud/Bandcamp accounts; play tracks in-browser
- Allow people to securely purchase music, if they'd like to support him
- A forum/posting board with an admin approval process in case comments get rude.
- Schedule of upcoming performances
- Bio, band members bios (and links to other band members websites if they have them)

[GNU GENERAL PUBLIC LICENSE](https://github.com/forrestfiller/Nam/blob/master/LICENSE.txt)
