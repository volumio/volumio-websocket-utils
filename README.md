

## Documentation

### .env
This file contains the environment variables for the application. Currently, it only contains the `WEBSOCKET_HOST` which is the IP address of the websocket host.

### getWizard.js
This script connects to the websocket server and emits a 'getWizard' event. When it receives a 'pushWizard' event from the server, it logs the data received.

Usage: `node getWizard.js`

### checkUpdate.js
This script connects to the websocket server and emits an 'updateCheck' event. When it receives an 'updateReady' event from the server, it logs the data received.

Usage: `node checkUpdate.js`

### getWirelessNetworks.js
This script connects to the websocket server and emits a 'getWirelessNetworks' event. When it receives a 'pushWirelessNetworks' event from the server, it logs the data received.

Usage: `node getWirelessNetworks.js`

### executeUpdate.js
This script connects to the websocket server and emits an 'update' event with an empty object. When it receives an 'updateProgress' event from the server, it logs the data received.

Usage: `node executeUpdate.js`

