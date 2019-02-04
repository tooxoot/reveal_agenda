const reveal_agenda = {
    initialize: (options) => {
        if (!options.agenda) { return; }

        const agenda = options.agenda;
        let insertionElement = options.insertionElement;

        if (!insertionElement && options.insertionElementSelector) {
            insertionElement = document.querySelector(options.insertionElementSelector);
        } else {
            insertionElement = document.querySelector('.reveal .slides');
        }

        if (!insertionElement) { return; }

        const section = document.createElement('section');
        section.classList.add('reveal-agenda');

        if (!options.insertToPosition) {
            insertionElement.prepend(section);
        } else {
            insertionElement.children[options.insertToPosition - 1].insertAdjacentElement("afterEnd", section);
        }
        if (options.title) {
            const title = document.createElement('h1');
            title.classList.add('reveal-agenda-title');
            title.innerHTML = options.title;
            section.appendChild(title);
        }

        const ul = document.createElement('ul');
        ul.classList.add('reveal-agenda-upper-ul');
        section.appendChild(ul);

        agenda.forEach(({title, subsections}) => {
            const li = document.createElement('li');
            li.classList.add('reveal-agenda-upper-li');
            ul.appendChild(li);

            const h2 = document.createElement('h2');
            h2.classList.add('reveal-agenda-section');
            h2.innerHTML = title;
            li.appendChild(h2);

            const hasSubsections = Boolean(subsections) && subsections.length;
            if (hasSubsections) {
                const ul = document.createElement('ul');
                ul.classList.add('reveal-agenda-lower-ul');
                li.appendChild(ul);

                subsections.map(({title}) => {
                    const li = document.createElement('li');
                    li.classList.add('reveal-agenda-lower-li');
                    ul.appendChild(li);

                    const h3 = document.createElement('h3');
                    h3.classList.add('reveal-agenda-subsection');
                    h3.innerHTML = title;
                    li.appendChild(h3);
                })
            }
        });

        try {
            const reveal = options.reveal || Reveal;
            Reveal.slide(0);
        } catch (e) {}
    }
}