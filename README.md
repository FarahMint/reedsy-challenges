# Reedsy-challenge

## About me

As a self-taught developer, I have started to explore Vue.js framework and as a result I have developed a music recommendation web application. In this project I used Vuex for the state management to ensure that the state is in a centralized store for all the components in the application. This allowed me to avoid props drilling and used some of the data for sibling view components.

[https://github.com/FarahMint/SpotiClone-vuex/blob/master/src/store.js](https://github.com/FarahMint/SpotiClone-vuex/blob/master/src/store.js)
I also implemented a dynamic routing with Vue-router library which enable the user to be directed to a new page when:

-  an album is selected : display page with more information about the selected album.
    
-  a search is performed: display page with search form and result from the search.
    
-  an album is selected as favorite: display page with the item selected as favorite.
    
-  Not found page is displayed when the path is not correct.
    

[https://github.com/FarahMint/SpotiClone-vuex/blob/master/src/router.js](https://github.com/FarahMint/SpotiClone-vuex/blob/master/src/router.js)

The data are fetched from iTunes API with search and filtering functionalities and allows users to select and save albums they like leveraging the local storage API to mimic the backend.

The main task the user can perform are:

1. User can search for the top 100 songs.

2. User can select one album and get more info

3. User can select album as a favourite

4. User can remove album from his favourite

  

## 2. General

**2.1. What kind of front end projects do you enjoy working on? Why?**

I am passionate about human-computer interaction, its constant development and how it shapes our lives. I love to design and build stunning interactive experiences. As someone who's highly curious, diligent, and creative, I'm driven by the challenge to constantly learn new things and execute with equal care to both form and function. One of my focus and ambition is to promote technology for helping people to achieve their full potential in life.

  

**2.2. Which are your favorite features of HTML5? How have you used them before?**

I like to use the HTML5's web storage feature to simulate and mimic the backend. The local storage makes it possible to store values in the browser. I used the localStorage in three of my projects where the user can select an item and then it get saved it in their favorite.

  

**2.3. Explain the difference between creating a DOM element setting innerHTML and using createElement.**

The `createElement` method add new elements to the DOM and take three steps at least in order to display the created element:

**![](https://lh5.googleusercontent.com/FnWTszCtfMrqTxYsgLKYS3et2ypl6yD_2YlGwqNuD8KUfokxrT8_lCpxwNtiOu27JgFNoLB2gdzVEREg_rw6zA6HmxAWScYS718E9CcFNA27rPctuwOOphEI6iAkuJjuPGfkdOUA)**
  

Whereas  the `innerHTML` property can create an element in a single line.
 ![](https://lh5.googleusercontent.com/UhObM7qnFqKjB450YSS5ZR-cZiFfJl1BTQAYnJzug6N5v84AMT5YdICTobJ7cKlwVn9lkDqFKIcd2Dhc4B8N_x22JefH8P1TVCLPYc7Zh6q99vFf_k0VgCmofqRf5QCqWeNAlWjI)**
  

The `innerHTML` property can also change the value of selected DOM node  and can be useful when we want to change all the children of a given element:

**![](https://lh4.googleusercontent.com/y55tA-B-4iyO7uk-jkPVHA4SHCkY5xm4Q_sMk-f045hJwMwjgT3ZXNnPcPXkDqhX5wQWvJ4tnkvRBl7ICLhHDt24fgE4TI9dx1xr9MQcbHYORr5oYHM6hS_6_k-6vod4imsEfJ3G)**
  
  

It is indeed most faster and easier to read when using the `innerHTML` property, although this has some pitfalls:

1) The `innerHTML` property destroys the contents of a container and replace it with something new as the example above demonstrates. The content is replaced everywhere, so when we append to or modify the `innerHTML`, all the DOM inside that element are re-parsed and recreated. In order to keep the previous content we need to remember to use += operators.
 However, It is recommended to use [insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) method when we want to insert the HTML into the document rather than replace the contents of an element because it prevents bug and allows to keep track of modifications.

  

2) This property is also prone to [cross-site scripting](https://en.wikipedia.org/wiki/cross-site%20scripting) attack (XSS), so it is recommended to not use it whenever we manipulate sensitive data and we have no control over it such as user information. In this instance it is better to use `textContent` because it does not parse the passed content as HTML, but instead inserts it as raw text.

To conclude, I will say that `createElement` methods  is a better approach when we want to create a brand new element in the DOM because it has less risks of bugs and we can then manipulate the DOM in a consistent way as it gives more flexibility in terms of what you can add to or do with an element initially without having to reselect the element.

[https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

[https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

[https://stackoverflow.com/questions/11515383/why-is-element-innerhtml-bad-code](https://stackoverflow.com/questions/11515383/why-is-element-innerhtml-bad-code)

  

**2.4. Compare two-way data binding vs one-way data flow.**

When we talk about data binding we are talking about  how data flow.

The one-way data flow binds the data from model (where data of application resides ) to view - (where we have our visuals and in most cases the HTML of our application). It has a top down approach. The information flows in only one single direction. So whatever happens on the UI triggers a message that signal to the model to update a part of the data. Only the model can access and change the application state, it is the single source of truth.

In javaScript, the React framework follows this unidirectional data flow. The HTML can only raise events that the component responds to. The typical example is by using onChange.

The `<input/>`  does not have direct access to the components state, its value is controlled by the APP function component. The only way to update the value is from the component itself, which is done by binding an onChange event to the `<input />` which sets e.target.value with the React component method setData()  .


![](https://lh6.googleusercontent.com/071nKaQxezSUDHGbLQwsbByJXaja-_tnBRBM0zsrpPqmBc4y53XBbEoV5PODpBzYKWfLAH2ylcdoOcZSMYCD9_InL30cQ7wopXOFBG6R-j5fot__noCxkVmwM7M8j8gRJfYx_QUU)

  
  
  
  

Two-way data binding bind the data from model to view and view model, the information flows in both directions. The UI fields are bound to the model data dynamically, so any change in UI field updates the model and any change in the model updates the UI field.

![](https://lh3.googleusercontent.com/7AKWonWlpvjBdQCMHfL56oSUMKOtVCLWLW_teAnGthUf-fpk-pYr0bfA2eT_EqeCB5Z-2fQ4LwGzU1r5XfyQV1T1cSViKbDBVI-7uAqnYpO8ZtK7RD2QbkmXr099HiirDNUmY-wf)

  
The attribute `v-model`  is a Vue directive., it's task is to reactively apply special behaviour to the DOM when the value of its expression changes. In the case of `v-model`, it binds the element to one of the data properties that Vue is watching - in our example the data property is `msg` .

Angular and Vue.js are popular framework which uses two-way.

**2.5. Why is asynchronous programming important in JavaScript?**
 
 In JavaScript, we often need to deal with asynchronous behavior to ensure responsiveness of the application. However to understand asynchronous programming first we need to understand how synchronous programming works.

JavaScript code runs on a single-thread and has a synchronous execution model. Single thread means that one command is being executed at a time and synchronous programming means that the code is executed sequentially from top-to-bottom, in the exact same order and it waits for one action to complete before moving on to the next. Therefore, if one function takes time like fetching data from an API, then all the code is blocked and nothing get displayed on the page. Among other things, this kind of blocking leads to really bad user experience.

  
Asynchronous programming allows programs to do more than one thing at a time and therefore can be used to mitigate this issue. Asynchronous code can start something now and then finish it later. Let’s say I am also using an API to fetch data but then instead of blocking the code and waiting for the response. Asynchronous programming allows the code to carry on, and perform other task, like displaying a loader indicating to the user that something is in progress until that API respond and then do something with the data to display on the page.
