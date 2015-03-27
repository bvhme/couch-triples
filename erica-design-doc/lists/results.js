function(doc, req) {
    send('{"results":[');
    row = getRow();
    if (row) {
        send(toJSON(row.value));
        while (row = getRow()) {
            send(',');
            send(toJSON(row.value));
        }
    }
    return ']}';
}
