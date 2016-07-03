# Angular-CLI with Wakanda Backend

Get up and running faster with Angular command line interface and wakanda backend.

## Notes

* Make sure Angular-CLI is installed globally 

```bash
npm install -g angular-cli
```

* Create a file named "parsingExceptions.json" and place it at the root level of the project folder,then add this line to exclude the
`dist` and `tmp` folders from indexing. 

```bash
{
    "excludedFolders":[ "tmp", "dist" ]
}
```

