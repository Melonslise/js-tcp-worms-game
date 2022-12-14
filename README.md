# Project goal
Develop a custom protocol on top of TCP/IP and a client-server game using said protocol.
# Tech stack 
[![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Electron.js](https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white)](https://www.electronjs.org)
[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://devdocs.io/html/)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://devdocs.io/css/)
# Structure
* `app/` - client application
* `server/` - server application
# Protocol description
**Internet protocol used: TCP/IP.**  
Messages are sent and received in form of byte streams.
The first byte of every message must contain one byte denoting the message ID
which tells the receiving side how to handle the incoming message,
and two bytes containing the payload length.
The rest of the byte stream should contain the payload data itself.
#### Example:
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/DRjz2bY.png">
  <source media="(prefers-color-scheme: light)" srcset="https://i.imgur.com/vHiXfn4.jpg">
  <img alt="Protocol Scheme" src="https://i.imgur.com/vHiXfn4.jpg">
</picture>

#### Data sent from the client must conform to one of the following message templates:
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/q2JKmWW.png">
  <source media="(prefers-color-scheme: light)" srcset="https://i.imgur.com/l6uSC83.png">
  <img alt="Client: Message Templates" src="https://i.imgur.com/l6uSC83.png">
</picture>

#### Data sent from the server must conform to one of the following message templates:
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/ElWW4RU.png">
  <source media="(prefers-color-scheme: light)" srcset="https://i.imgur.com/zfJLV92.png">
  <img alt="Server: Message Templates" src="https://i.imgur.com/zfJLV92.png">
</picture>

#### Message flow chart:
<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://i.imgur.com/kRlNpPZ.png">
  <source media="(prefers-color-scheme: light)" srcset="https://i.imgur.com/ea4sHZN.png">
  <img alt="Server: Message Templates" src="https://i.imgur.com/ea4sHZN.png">
</picture>