 const people2 = [



      { name2: 'ZEBRA DEVICES', link: "./zebra.html"},
      { name2: 'ZEBRA CT-55', link: "./zebra/zebra-tc55.html"},
      { name2: 'ZEBRA TC70', link: "./zebra/zebra-tc70-75.html"},
      { name2: 'ZEBRA TC20', link: "./zebra/zebra-tc20.html"},
      { name2: 'ZEBRA MC 67', link: "./zebra/zebra-mc67.html"},
      { name2: 'ZEBRA MC31', link: "./zebra/zebra-mc31.html"},

    ];

    const list2 = document.getElementById('list2');


    /* grab list items */
    function setList2(group) {
      clearList2 ();
      for (const person2 of group) {
        const item2 = document.createElement('a');
        item2.href = person2.link;
        item2.classList.add('list-group-item');
        const text2 = document.createTextNode(person2.name2);
        item2.appendChild(text2);
        list2.appendChild(item2);
      }
      if (group.length === 0) {

        setNoResults2();

      }
    }

    /* clear search list */
    function clearList2 () {
      while (list2.firstChild) {
        list2.removeChild(list2.firstChild);
      }
    }


    /* Display no result message */
    function setNoResults2 () {

      const item2 = document.createElement('li');
        item2.classList.add('list-group-item');
        const text = document.createTextNode('No results found');
        item2.appendChild(text2);
        list2.appendChild(item2);

    }

    function getRelevancy2(value, searchTerm) {

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

    const searchInput2 = document.getElementById('search2');

    searchInput2.addEventListener('input', (event) => {
      let value2 = event.target.value;
      if (value2 && value2.trim().length > 0) {
        value2 = value2.trim().toUpperCase();
        setList2(people2.filter(person2 => {
          return person2.name2.includes(value2);
        }).sort((personA, personB) => {

          return getRelevancy2(personB.name2, value2) - getRelevancy2(personA.name2, value2);
        }));

      } else {
        clearList2();
      }
    });
