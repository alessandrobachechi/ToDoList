# JAVASCRIPT: test modulo 2

## Todo list
L'applicativo da realizzare è la classica todo list, un'altro esercizio che viene spesso richiesto in sede di colloquio.

### Requisiti
- mostrare una lista di todo
- aggiungere dei todo alla lista
- checkare dei todo (macarli come completi)
- mostrare due totali (il numero di todo rimasti e il numero di todo totale)
- cancellare dei todo
- validazione: non si può aggiungere un todo con descrizione vuota o nulla
- validazione: non si può aggiungere un todo con descrizione uguale ad una già esitente

### Requisiti opzionali (bonus)
- il pulsante `Show completed` permette di alternare la vista in cui si vedono tutti i todo a quella in cui si vedono solo quelli "da completare". La vista di default deve essere la seconda
- quando un todo viene checkato dalla vista filtrata, non scompare subito ma dopo un delay di 500ms ([setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout))
- in caso di validazione fallita, mostrare un messaggio di errore `Invalid todo` sotto all'input

## Precisazioni

### L'oggetto todo
È un oggetto con i seguenti due campi:
- "description", di tipo stringa
- "done", di tipo booleano

### Struttura dell'applicativo
Vi lascio l'html già fatto, non vi sarà bisogno di modificarlo per implementare nessuno dei requisiti, tranne l'ultimo requisito bonus (che richiede l'aggiunta di una riga di html).
Inoltre vi lascio una funzione già scritta nel js, la funzione `render`. 
È la funzione responsabile di stampare a schermo sia la todo list che i totali, e deve essere chiamata ogni volta che avviene un evento significativo (check di un todo, aggiunta di un todo...).
Infine, l'applicativo è realizzato con bootstrap e non richiede aggiunta di css custom.
