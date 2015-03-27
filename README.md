# couch-triples

Experimental triplestore in CouchDB, has basic storage and retreival ability right now.

## Document model
Documents are stored in the following model as triples:

```JSON
{
    "_id": "HASH",
    "_rev": "REV-HASH",
    "s": "IRI",
    "p": "IRI",
    "o": "IRI | Literal"
}
```

`S` stands for the subject, `p` for predicate or property and `o` for the object. For instance this subject BBC Thing is the same as (according to the BBC ontology) this DBPedia thing:

```JSON
{
    "s": "http://www.bbc.co.uk/things/92bcfc9f-bff2-4f1a-b38e-182542106fb9",
    "p": "http://www.bbc.co.uk/ontologies/coreconcepts/sameAs",
    "o": "http://dbpedia.org/resource/Apple_Inc."
}
```

## API

The API is layed out like this

`{{host}}/{{database}}/_design/couch-triples/_rewrite/list/{{kind}}?key={{query}}`

You can search for either S, P or O and for a combination of two. The search query is always a JSON object.

### Search for Subject, Predicate OR Object and return all related values
Example: Get all triples where the Subject is `http://www.bbc.co.uk/things/92bcfc9f-bff2-4f1a-b38e-182542106fb9`

`{{host}}/{{database}}/_design/couch-triples/_rewrite/list/s?key={"s": "http://www.bbc.co.uk/things/92bcfc9f-bff2-4f1a-b38e-182542106fb9"}`

### Search for two of Subject, Predicate AND Object and return all related values
Example: Get all triples where the Predicate is `http://www.bbc.co.uk/ontologies/coreconcepts/sameAs` and the Object `http://dbpedia.org/resource/Apple_Inc.`

`{{host}}/{{database}}/_design/couch-triples/_rewrite/list/po?key={"p": "http://www.bbc.co.uk/ontologies/coreconcepts/sameAs", "o": "http://dbpedia.org/resource/Apple_Inc."}`

## Install
Use Erica to build and push this to any database
TODO: Elaborate

## Roadmap
- Generate JSON-LD if the receiver asks for it
