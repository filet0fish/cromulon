
export class Contest {

    constructor (container, item) {
        this.containerEl = container;
        this.itemTemplate = item.content;
    }

    set entries (data) {
        data.forEach(element => {
            let instanceEl = document.importNode(this.itemTemplate, true);

            instanceEl.querySelector("img").src = element.memeUrl;
            instanceEl.querySelector("h1").innerText = `${element.last}, ${element.first}`;
            instanceEl.querySelector("p").innerText =`${element.dishDisplayName}`;

            this.containerEl.appendChild(instanceEl);
        });
    }
}
