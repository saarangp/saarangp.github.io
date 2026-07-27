// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-started-an-internship-with-the-brainai-team-at-fair",
          title: 'Started an internship with the BrainAI team at FAIR!',
          description: "",
          section: "News",},];
