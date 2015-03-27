# couch-triples

Experimental triplestore in CouchDB

## Install
Use Erica to build and push this
TODO: Elaborate

## API

The API is layed out like this

`
{{host}}/{{database}}/_design/couch-triples/_rewrite/search/{{kind}}?key={{query}}
`

You can search for either S, P or O and for a combination of two.

### Search for Subject, Predicate OR Object and return all related values
Example: Get all triples where the Subject is `http://www.bbc.co.uk/things/92bcfc9f-bff2-4f1a-b38e-182542106fb9`

`
{{host}}/{{database}}/_design/couch-triples/_rewrite/search/s?key={"s": "http://www.bbc.co.uk/things/92bcfc9f-bff2-4f1a-b38e-182542106fb9"}
`

### Search for two of Subject, Predicate AND Object and return all related values
Example: Get all triples where the Predicate is `http://www.bbc.co.uk/ontologies/coreconcepts/sameAs` and the Object `http://dbpedia.org/resource/Apple_Inc.`

`
{{host}}/{{database}}/_design/couch-triples/_rewrite/search/po?key={"p": "http://www.bbc.co.uk/ontologies/coreconcepts/sameAs", "o": "http://dbpedia.org/resource/Apple_Inc."}
`
