/* Charon
   Index log documents by doc.
   Value: timestamp.
*/
function(doc) {
    if (doc.charon_doctype !== 'log') return;
    emit(doc.doc, doc.timestamp);
}
