const msal = require('@azure/msal-node');
const TENANT_ID = "";
const CLIENT_ID = "";
const CLIENT_SECRET = "";

const AAD_ENDPOINT = "https://login.microsoftonline.com";
const GRAPH_ENDPOINT = "https://graph.microsoft.com";
const msalConfig = {
    auth: {
        clientId: CLIENT_ID,
        authority: AAD_ENDPOINT + '/' + TENANT_ID,
        clientSecret: CLIENT_SECRET,
    }
};
const tokenRequest = {
    scopes: [GRAPH_ENDPOINT + '/.default'],
};
const apiConfig = {
    uri: GRAPH_ENDPOINT,
};
const cca = new msal.ConfidentialClientApplication(msalConfig);

async function getToken(tokenRequest) {
    return await cca.acquireTokenByClientCredential(tokenRequest);
}

module.exports = {
    apiConfig: apiConfig,
    tokenRequest: tokenRequest,
    getToken: getToken
};
