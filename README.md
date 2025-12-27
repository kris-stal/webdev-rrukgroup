## R&R UK Group Website: https://rrukgroup.co.uk

A minimal JavaScript usage for performance, built entirely from HTML, CSS and JavaScript, with JavaScript being used only when necessary for styling for optimization.
This project was a part of my internship to replace the previously high cost website and upkeep of hosting.

## Features
- Clean, minimal and efficient design through HTML and CSS
- Basic CSS animations for improved user experience
- JavaScript kept to a minimum to avoid bloat and improve performance
- Fully responsive layout for desktop and mobile screens
- Allows for expansion of additional websites with minimal changes required

## Deployment
- Ubuntu Server setup locally
- NGINX used as web server, inside a docker container
- Cloudflared Tunnel used as reverse proxy for secure and remote website access, inside another docker container

## Check out my project
This project can be cloned and run locally, tested by opening index.html in your browser.
Note that cloudflared tunneling will be missing entirely, so the website will just be hosted locally.
Secrets are not exposed on this repo (credentials.json for cloudflared tunnel token).

## What's next
- Implement website information updates (site map update, new projects) when they are recieved
- Sync forms with Microsoft Exchange
- Consider Cloudflared alternative solutions for more control and less limitations
