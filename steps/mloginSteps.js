const route = require("color-convert/route");
const { contentType } = require("mime-types");
const status = require("statuses");

const { I } = inject();

Given('Mock a algun texto de la pagina', () => {
    I.mockRoute('https://rickandmortyapi.com/page-data/sq/d/2138676555.json', async (route) => {
    await route.fulfill (
        status (200),
        contentType,  'application/json',
        body, JSON.stringify ({
            "data": {
                "site": {
                    "siteMetadata": {
                        "title": "The Rick and Morty",
                        "shortTitle": "The Rick and Morty API",
                        "description": "The Rick and Morty API is a REST and GraphQL API based on the television show Rick and Morty",
                        "siteUrl": "https://rickandmortyapi.com",
                        "image": "/images/site.jpeg",
                        "userTwitter": "rickandmortyapi",
                        "nav": [
                            {
                                "title": "Docs",
                                "path": "/documentation"
                            },
                            {
                                "title": "About",
                                "path": "/about"
                            }
                        ],
                        "github": {
                            "site": "https://github.com/afuh/rick-and-morty-api-site",
                            "api": "https://github.com/afuh/rick-and-morty-api"
                        },
                        "author": {
                            "name": "Axel Fuhrmann",
                            "site": "https://github.com/afuh"
                        },
                        "status": {
                            "site": "https://status.rickandmortyapi.com"
                        }
                    }
                }
            }
        }
       )
    )
})
}
)

Given("Estoy en la pagina", () =>{
    I.amOnPage ('https://rickandmortyapi.com/');
    I.wait(15);
})