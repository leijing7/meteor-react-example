# Meteor + React demo
This is to demonstrate using Meteor, React, FlowRouter and React-Layout to fetch Github data via its API. This demo also uses Semantic UI to beautify the view.

I wrote this demo on Mac OS X. You might need to change some commands in your platform if it is different.

#### 1. Install Meteor.
First of all, install the mighty Meteor if you don't have it on you machine. Refer [this official](https://www.meteor.com/install) doc to install it. You don't even have to install Node.js and MongoDB to install Meteor. Meteor will take care of them for you.

#### 2. Run below commands in your terminal.
<pre>
//Create meteor project
meteor create meteor-react-flux

//Go in the directory
cd meteor-react-flux

//Remove the generated files
rm -r *

//Create the recommended file structure
//Don't change the folder names. Meteor uses the names to organise the code
mkdir client server model

//Create files
touch client/app.js client/router.jsx server/server.js model/collections.js
</pre>

#### 3. Install Semantic UI to build the site beautifully.
```meteor add semantic:ui flemay:less-autoprefixer jquery```<br/>
Its document is [here](https://atmospherejs.com/semantic/ui). One thing to remember that you have to put the ```custom.semantic.json``` in the specified folder ```/client/lib``` as the document says, otherwise Meteor can't recognise it. Because the folder name tells Meteor what it is as its meaning - client lib.

#### 4. Install the official React support.
<code>meteor add react</code>
The document is [here](https://atmospherejs.com/meteor/react).

#### 5. Install other related packages.
I personally prefer FlowRouter rather than Iron.Router.    
<code>meteor add kadira:flow-router</code>
Refer this [doc](https://atmospherejs.com/kadira/flow-router) to know more about FlowRouter.

Then install a React layout package
<code>meteor add kadira:react-layout</code>
This is to organise the React components. Read [this](https://atmospherejs.com/kadira/react-layout) for more information. You might need it for the SEO purpose.

Install github api
<code>meteor add bruz:github-api</code>

Remove autopublish
<code>meteor remove autopublish</code>

#### 6. Let's code
Put null in Meteor.Collection as <code> ClientRepoInfo = new Meteor.Collection(null);</code> will create a local only collection in the minimongo of Browser.

Other code in this [repo]().
