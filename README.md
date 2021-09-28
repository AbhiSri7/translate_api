<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Thanks again! Now go create something AMAZING! :D
***
***
***
*** To avoid retyping too much info. Do a search and replace for the following:
*** github_username, repo_name, twitter_handle, email, project_title, project_description
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/AbhiSri7/translate_api">
    <img src="https://3.imimg.com/data3/JJ/ES/MY-12444595/google-translate-api-250x250.jpg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Translate Api Task</h3>

  <p align="center">
    A smart translate api with pre chaching feature built using google translate, nodejs, sql
    <br />
    <a href="https://github.com/AbhiSri7/translate_api"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/AbhiSri7/translate_api">View Demo</a>
    ·
    <a href="https://github.com/AbhiSri7/translate_api/issues">Report Bug</a>
    ·
    <a href="https://github.com/AbhiSri7/translate_api/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://github.com/AbhiSri7/translate_api)


### Built With

* [Node.js](https://nodejs.org/en/)
* [Google Translate](https://translate.google.co.in/)
* [SQL](https://www.mysql.com/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* A tool to send RESTful requests to the api. We used REST client extension of VS Code to send requests to the server.

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/AbhiSri7/translate_api.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```



<!-- USAGE EXAMPLES -->
## Usage

1. Run the server
   ```sh
   nodemon index.js
   ```
2. Send a get request to http://localhost:8500, the response from the server should be "Hello World".
3. Send a post request to http://localhost:8500, with body having key-value pairs as example given below:
  ```sh
  {
    "to_trans" : "My name is Abhishek.",
    "from": "en",  //English
    "to": "hi"  //Hindi
  }
  ```
  The response from the server should be the translated text from English to Hindi: "मेरा नाम अभिषेक हे।"
  

<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/AbhiSri7/translate_api/issues) for a list of proposed features (and known issues).



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Added some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- CONTACT -->
## Contact

[Abhishek Srivastav](https://linkedin.com/in/abhishek-srivastav7) - abhisrivastav551@gmail.com

Project Link: [https://github.com/AbhiSri7/translate_api](https://github.com/AbhiSri7/translate_api)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements

* [Img Shields](https://shields.io)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/AbhiSri7/translate_api.svg?style=for-the-badge
[contributors-url]: https://github.com/AbhiSri7/translate_api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/AbhiSri7/translate_api.svg?style=for-the-badge
[forks-url]: https://github.com/AbhiSri7/translate_api/network/members
[stars-shield]: https://img.shields.io/github/stars/AbhiSri7/translate_api.svg?style=for-the-badge
[stars-url]: https://github.com/AbhiSri7/translate_api/stargazers
[issues-shield]: https://img.shields.io/github/issues/AbhiSri7/translate_api.svg?style=for-the-badge
[issues-url]: https://github.com/AbhiSri7/translate_api/issues
[license-shield]: https://img.shields.io/github/license/AbhiSri7/translate_api.svg?style=for-the-badge
[license-url]: https://github.com/AbhiSri7/translate_api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/abhishek-srivastav7
[product-screenshot]: images/aboutproj.png
