class Queue {
    constructor() {
        this.items = [];
    }

    // Ajouter un élément à la fin
    enqueue(item) {
        this.items.push(item);
    }

    // Retirer le premier élément
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items.shift();
    }

    // Voir le premier élément sans le retirer
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[0];
    }

    // Vérifier si la file est vide
    isEmpty() {
        return this.items.length === 0;
    }

    // Afficher la file
    printQueue() {
        console.log(this.items);
    }
}

//Implémenter la classe PrinterQueue

class PrinterQueue {
    constructor() {
        this.queue = new Queue();
    }

    // Ajouter un travail d'impression
    addJob(name, pages) {
        const job = {
            name: name,
            pages: pages
        };

        this.queue.enqueue(job);
        console.log(`${name}'s print job (${pages} pages) added.`);
    }

    // Traiter le premier travail
    processJob() {
        if (this.queue.isEmpty()) {
            console.log("No print jobs in the queue.");
            return;
        }

        const job = this.queue.dequeue();
        console.log(`Printing ${job.name}'s document (${job.pages} pages)...`);
    }

    // Afficher tous les travaux en attente
    printJobs() {
        if (this.queue.isEmpty()) {
            console.log("Queue is empty.");
            return;
        }

        console.log("\nCurrent Print Queue:");

        this.queue.items.forEach((job) => {
            console.log(`- ${job.name} (${job.pages} pages)`);
        });
    }
}



//Tester le programme
const printer = new PrinterQueue();

printer.addJob("Alice", 5);
printer.addJob("Bob", 12);
printer.addJob("Charlie", 3);

console.log();

printer.printJobs();

console.log();

printer.processJob();

console.log();

printer.printJobs();

console.log();

printer.processJob();
printer.processJob();
printer.processJob();


