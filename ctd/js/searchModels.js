 const people = [



      { name: 'ZEBRA DEVICES', link: "./zebra.html"},
      { name: 'ZEBRA CT-55', link: "./zebra/zebra-tc55.html"},
      { name: 'ZEBRA TC70', link: "./zebra/zebra-tc70-75.html"},
      { name: 'ZEBRA TC20', link: "./zebra/zebra-tc20.html"},
      { name: 'ZEBRA MC 67', link: "./zebra/zebra-mc67.html"},
      { name: 'ZEBRA MC31', link: "./zebra/zebra-mc31.html"},

    ];

    const list = document.getElementById('list');


    /* grab list items */
    function setList(group) {
      clearList ();
      for (const person of group) {
        const item = document.createElement('a');
        item.href = person.link;
        item.classList.add('list-group-item');
        const text = document.createTextNode(person.name);
        item.appendChild(text);
        list.appendChild(item);
      }
      if (group.length === 0) {

        setNoResults();

      }
    }

    /* clear search list */
    function clearList () {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    }


    /* Display no result message */
    function setNoResults () {

      const item = document.createElement('li');
        item.classList.add('list-group-item');
        const text = document.createTextNode('No results found');
        item.appendChild(text);
        list.appendChild(item);

    }

    function getRelevancy(value, searchTerm) {

      if (value === searchTerm) {

        return 2;

      } else if (value.startsWith(searchTerm)) {

        return 1;

      } else if (value.includes(searchTerm)) {

        return 0;

      } else {

        return -1;
      }

    }

    const searchInput = document.getElementById('search');

    searchInput.addEventListener('input', (event) => {
      let value = event.target.value;
      if (value && value.trim().length > 0) {
        value = value.trim().toUpperCase();
        setList(people.filter(person => {
          return person.name.includes(value);
        }).sort((personA, personB) => {

          return getRelevancy(personB.name, value) - getRelevancy(personA.name, value);
        }));

      } else {
        clearList();
      }
    });
