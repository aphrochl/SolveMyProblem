<h1 align="center">Simply Solved</h1>

<p align="center">
  <img src="https://github.com/ntua/saas2024-55/blob/main/frontend/src/logo.png?raw=true" alt="Logo">
</p>

 
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Docker](https://img.shields.io/badge/Docker-0db7ed?style=for-the-badge&logo=docker&logoColor=white)
![pgAdmin](https://img.shields.io/badge/pgAdmin4-FF6C37?style=for-the-badge&logo=pgadmin&logoColor=white)
![Apache Bench](https://img.shields.io/badge/Apache%20Bench-7F1F22?style=for-the-badge&logo=apache&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)



## Team Members 



 

 **Τάκης Σταματόπουλος [el20096@mail.ntua.gr](https://github.com/ntua-el20096)**  
 **Αφροδίτη Μαριάνθη Χλαπάνη [el20889@mail.ntua.gr](https://github.com/ntua-el20889)**  
 **Κυριακή Καρατζούνη [el20634@mail.ntua.gr](https://github.com/ntua-el20634)**  


### Installation

#### Requirements

Ensure you have the following installed:

- PgAdmin4
- Apache Bench
- Node.js and npm (for JavaScript dependencies)
- Python (for OR tools and other functionalities)
- Docker


### Setup

1. **Clone the repository:**

```bash
git clone https://github.com/ntua/saas2024-55.git
```

2. **Install dependencies**:
First, install Python dependencies specified in requirements.txt.

```bash
pip install -r requirements.txt
```

3. **Connect Database:**
Connect Postgresql Database.

#### Docker

SimplySolved is Dockerized for easy deployment.

1. **Build and run Docker containers:**
   
```bash
docker-compose up --build
```
   This commmand builds the Docker images and starts the containers defined in `docker-compose.yml`.

2. **Verify container status:**
Run the following command in order to verify that all the necessary containers are running:

```bash
docker ps
```
### License

This project is licensed under the MIT License. See the LICENSE file for more details.
