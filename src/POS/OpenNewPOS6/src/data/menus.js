const menus = [
    {
      id: 'dinner',
      title: 'Dinner Menu',
      time: '10:30am - 12am',
      items: 
        { row1: {
            items: [
                { id: 'gap', name: ' ', className: 'menuButton' },
                { id: 'bigMac', name: 'Big Mac', className: 'menuButton' },
                { id: 'cheeseburger', name: 'Cheeseburger', className: 'menuButton' },
                { id: 'qtrPounder', name: 'Quarter Pounder', className: 'menuButton'},
                { id: 'qtrDlx', name: 'Q Pounder Deluxe', className: 'menuButton' },
                { id: 'steakStack', name: 'Steakhouse Stack', className: 'menuButton' },
                { id: 'mozSticks', name: 'Mozarella Sticks', className: 'menuButton' },
                { id: 'extndBreakfast', name: 'Extended Breakfast', className: 'red' },
                { id: 'happyMeal', name: 'Happy Meal', className: 'red' },
                { id: 'promoItem', name: 'Promo Item', className: 'purple' },
            ]
        },
        row2: {
            items: [
                { id: 'gap', name: ' ', className: 'menuButton' },
                { id: 'dblBigMac', name:'Double Big Mac', className: 'menuButton' },
                { id: 'dblCheeseburger', name: 'Double Cheeseburger', className: 'menuButton' },
                { id: 'dblQtrPounder', name: 'Q Pounder Double', className: 'menuButton'},
                { id: 'qtrBBQ', name: 'QP BBQ Bacon Onion', className: 'menuButton' },
                { id: 'gap2', name: ' ', className: 'menuButton' },
                { id: 'gap3', name: ' ', className: 'menuButton' },
                { id: 'myMaccasOffer', name: 'MyMaccas Offer', className: 'red' },
                { id: 'wrapsSalads', name: 'Wraps Salads', className: 'red' },
                { id: 'clearChoice', name: 'Clear Choice', className: 'purple' },
            ]
        },
        row3: {
            items: [
                { id: 'gap', name: ' ', className: 'menuButton' },
                { id: 'nuggets', name:'Nuggets', className: 'red nuggetButton' },
                { id: 'trpCheeseburger', name: 'Trp Cheeseburger', className: 'menuButton' },
                { id: 'mcSmart', name: '$6.95 Sml McSmart Meal', className: 'menuButton'},
                { id: 'bangus', name: 'BBQ Bacon Angus', className: 'menuButton' },
                { id: 'clangus', name: 'Classic Angus', className: 'menuButton' },
                { id: 'gap2', name: ' ', className: 'menuButton' },
                { id: 'myMaccasOffer', name: 'Maccas Bundles', className: 'red' },
                { id: 'wrapsSalads', name: 'McHappy Day', className: 'red' },
                { id: 'clearChoice', name: 'Special Functions', className: 'specialFunctions round' },
            ]
        }
    }
    },
    {
        id: 'breakfast',
        title: 'Breakfast Menu',
        time: '4am-10:30am',
        items: [
          
        ],
      },
      {
        id: 'chicken',
        title: 'Chicken Menu',
        time: '10:30am - 12am',
        items: [
          ],
      },
      {
        id: 'cafe',
        title: 'McCafe Menu',
        time: '10:30am - 12am',
        items: [
          ],
      },
      {
        id: 'drinks',
        title: 'Drinks Menu',
        time: '10:30am - 12am',
        items: [
          ],
      },
      {
        id: 'condiments',
        title: 'Condiments Menu',
        time: '10:30am - 12am',
        items: [
          ],
      },
      {
        id: 'lsm',
        title: 'LSM Promo Menu',
        time: '10:30am - 12am',
        items: [
          ],
      },
    // Add more menus as needed
  ];
  
  export default menus;