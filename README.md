# reveal_agenda

This repository contains a [reveal.js](https://revealjs.com/) plugin.
It adds an agenda slide to the Presentation.

### Initialization

```js
{
    src: 'plugin/reveal-agenda/reveal-agenda.js',
    async: true,
    callback: function() { reveal_agenda.initialize(options); }
}
```

The options object has the following form:

```typescript
interface options {
    agenda: AgendaSection;
    title?: string;
    insertionElement?: HTMLElement;
    insertionSelector?: string = '.reveal .slides';
    insertToPosition?: number = 0;
    reveal?: Object = Reveal;
}

interface AgendaSection {
    id: string;
    title: string;
    subsections?: AgendaSubSection;
}

interface AgendaSection {
    id: string;
    title: string;
}
```

## Classes
`reveal-agenda-title`
`reveal-agenda-upper-ul`
`reveal-agenda-upper-li`
`reveal-agenda-section`
`reveal-agenda-lower-ul`
`reveal-agenda-lower-li`
`reveal-agenda-subsection`

## Example

```js
const agenda = [
				{ id: 'layout-center', title: 'Center' },
				{ id: 'layout-columns', title: 'Columns' },
				{ id: 's1', title: 'Section 1', subsections: [
					{ id: 's1-1', title: 'Subsection 1' },
					{ id: 's1-2', title: 'Subsection 2' },
					{ id: 's1-3', title: 'Subsection 3' },
				] },
				{ id: 's2', title: 'Section 2' },
				{ id: 's3', title: 'Section 3' },
				{ id: 's4', title: 'Section 4' },
			]
```
Will create:
```html

<ul class="reveal-agenda-upper-ul">
    <li class="reveal-agenda-upper-li">
        <h2 class="reveal-agenda-section">Center</h2>
    </li>
    <li class="reveal-agenda-upper-li">
        <h2 class="reveal-agenda-section">Columns</h2>
    </li>
    <li class="reveal-agenda-upper-li">
        <h2 class="reveal-agenda-section">Section 1</h2>
        <ul class="reveal-agenda-lower-ul">
            <li class="reveal-agenda-lower-li">
                <h3 class="reveal-agenda-subsection">Subsection 1</h3>
            </li>
            <li class="reveal-agenda-lower-li">
                <h3 class="reveal-agenda-subsection">Subsection 2</h3>
            </li>
            <li class="reveal-agenda-lower-li">
                <h3 class="reveal-agenda-subsection">Subsection 3</h3>
            </li>
        </ul>
    </li>
    <li class="reveal-agenda-upper-li">
        <h2 class="reveal-agenda-section">Section 2</h2>
    </li>
    <li class="reveal-agenda-upper-li">
        <h2 class="reveal-agenda-section">Section 3</h2>
    </li>
    <li class="reveal-agenda-upper-li">
        <h2 class="reveal-agenda-section">Section 4</h2>
    </li>
</ul>
</section>
```