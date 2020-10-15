// Update this constant with your ServiceNow credentials
const options = {
  url: 'https://dev77698.service-now.com',
  username: 'admin',
  password: '7aMpfDSzP9zK',
  serviceNowTable: 'change_request'
};

// Import built-in Node.js package path.
const path = require('path');


function cback(data, error) {

   console.log("cback: Invoking callback function");
   if (error) {
      console.error(`\nError returned from GET request:\n${JSON.stringify(error)}`);
    }
    console.log(`\nResponse returned from GET request:\n${JSON.stringify(data)}`)
}

/**
 * Import the ServiceNowConnector class from local Node.js module connector.js.
 *   and assign it to constant ServiceNowConnector.
 * When importing local modules, IAP requires an absolute file reference.
 * Built-in module path's join method constructs the absolute filename.
 */
const ServiceNowConnector = require(path.join(__dirname, './connector.js'));

/**
 * @function mainOnObject
 * @description Instantiates an object from the imported ServiceNowConnector class
 *   and tests the object's get and post methods.
 */
function mainOnObject() {
  // Instantiate an object from class ServiceNowConnector.
  const connector = new ServiceNowConnector(options);
  
  connector.options.url = options.url;
  connector.options.username = options.username;
  connector.options.password = options.password;
  connector.options.serviceNowTable = options.serviceNowTable;
  
  // Test the object's get and post methods.
  connector.get(cback);
  
  
  connector.post(cback);

}

// Call mainOnObject to run it.
mainOnObject();