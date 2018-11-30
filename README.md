ps2-online-back-end
=====

This repository contains all end-points from PS2OnLine Aplication.

- GET Method:
```
- https://you-domain.com/game-category/:id?
  - Optional parameter: id
  - Get all game categories from database
```
```
- https://you-domain.com/color-status/:id?
  - Optional parameter: id
  - Get all status with your color that represents that status:
    -- Green color means that is a OK Status and the online server is running very well
    -- Yellow color means that is a Warning Status and the online server is runing with issues
    -- Red color means that is a Problem Status and the online server is offline.
```
```
- https://you-domain.com/dns/:id?
  - Optional parameter: id
  - Get all DNS servers registered at database
```
```
- https://you-domain.com/game-list/:id?
  - Optional parameter: id
  - Get all games registered at database
```
```
- https://you-domain.com/game-image/:id?
  - Optional parameter: id
  - Get all game screenshots registered at database
```
```
- https://you-domain.com/game-review/:id?
  - Optional parameter: id
  - Get all game reviews registered at database in three languages (English, Portuguese and Spanish)
```
```
- https://you-domain.com/original-host/:id?
  - Optional parameter: id
  - Get all original hosts from the games that are registered at database
```
```
- https://you-domain.com/game-region/:id?
  - Optional parameter: id
  - Get all game regions (USA, JPN ou EU)
```

- POST Method:
```
- https://you-domain.com/game-category
  - Register a game category
  - You must register a game category to register a game in game-list end-point
```
```
- https://you-domain.com/color-status
  - Register a color status
  - You must register a color status to register a game in game-list end-point
```
```
- https://you-domain.com/dns
  Register a DNS Server
```
```
- https://you-domain.com/game-list
  - Register a game. Some tables are mandatory before register a game:
    -- Game Category
    -- Color Status
    -- Original Host
    -- Game Region
```
```
- https://you-domain.com/game-image
  - Register cover and 5 screenshots from a game
  - You must have to register a game first
```
```
- https://you-domain.com/game-review
  - Register a game review in three languages (English, Portuguese and Spanish)
  - You must have to register a game first
```
```
- https://you-domain.com/original-host
  - Register a original host from a game
  - You must register a original host to register a game in game-list end-point
```
```
- https://you-domain.com/game-region
  - Register a game region like USA, JPN or EU regions
  - You must register a game region to register a game in game-list end-point
```

- PATCH Method:
```
- https://you-domain.com/game-category/:id
  - Update a game category in database
```
```
- https://you-domain.com/color-status/:id
  - Update a color status in database
```
```
- https://you-domain.com/dns/:id
  - Update a DNS Server in database
```
```
- https://you-domain.com/game-list/:id
  - Update a game in database
```
```
- https://you-domain.com/game-image/:id
  - Update a game image in database
```
```
- https://you-domain.com/game-review/:id
  - Update a game review in database in one or three languages (English, Portuguese and Spanish)
```
```
- https://you-domain.com/original-host/:id
  - Update a original host in database
```
```
- https://you-domain.com/game-region/:id
  - Update a game region in database
```

- DELETE Method:
```
- https://you-domain.com/game-category/:id
  - Delete a game category in database
```
```
- https://you-domain.com/color-status/:id
  - Delete a color status in database
```
```
- https://you-domain.com/dns/:id
  - Delete a DNS Server in database
```
```
- https://you-domain.com/game-list/:id
  - Delete a game in database
```
```
- https://you-domain.com/game-image/:id
  - Delete a game image in database
```
```
- https://you-domain.com/game-review/:id
  - Delete a game review in database
```
```
- https://you-domain.com/original-host/:id
  - Delete a original host in database
```
```
- https://you-domain.com/game-region/:id
  - Delete a game region in database
```

To see more, visit in my other repositories from this project:

- Database code repository:
```
https://github.com/mcrisostomo/ps2-online-db
```

- APP code repository:
```
https://github.com/mcrisostomo/ps2-online-app
```

- Site code repository:
```
https://github.com/mcrisostomo/ps2-online-site
```
