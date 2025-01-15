
Esercizio di oggi: React Blog Pages (2)
repo: react-router  (stessa di ieri)
Consegna

Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio e della creazione del post!

- Aggiungiamo i link alla lista dei post

- Facciamo quindi in modo di raggiungere la pagina di dettaglio del singolo post

- Al submit del form reindirizziamo l'utente verso la pagina di dettaglio del post creato


Bonus
1. Proviamo a inserire nella pagina di dettaglio una navigazione che ci consenta di andare al post precedente e a quello successivo.
2. Aggiungiamo la possibilità di ritornare dalla pagina di dettagli alla pagina precedente
3. Gestire la pagina Not found
Buon lavoro e buon weekend


Sfruttiamo le Context API per rendere disponibile la lista dei post in tutta la nostra app.
- Partiamo col definire la lista dei post all’interno di `App.jsx`

- Se non lo abbiamo già fatto in precedenza, creiamo un componente `PostsPage.jsx`  che conterrà al suo interno un titolo e un componente `PostsList.jsx`  che mostra la lista di tutti i nostri post.
 - Creiamo un file per definire il nostro Context ed esportiamolo
 - Importiamo il Provider in `App.jsx` e wrappiamoci la nostra applicazione
 - Facciamo in modo che il componente `PostsList.jsx` recuperi i post consumando il Context e crei dunque una card per ciascuno di essi.
 La struttura dell’App deve essere
 `App.jsx` > `PostsPage.jsx` > `PostsList.jsx`   > `PostCard.jsx`