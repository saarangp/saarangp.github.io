// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-saarang-panchavati",
    title: "Saarang Panchavati",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "news-started-an-internship-with-the-brainai-team-at-fair",
          title: 'Started an internship with the BrainAI team at FAIR!',
          description: "",
          section: "News",},{id: "news-defended-my-phd",
          title: 'Defended my PhD!',
          description: "",
          section: "News",},{id: "news-started-as-a-research-scientist-at-google-deepmind-in-paris",
          title: 'Started as a Research Scientist at Google DeepMind in Paris!',
          description: "",
          section: "News",},];
