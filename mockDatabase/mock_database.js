const locations = [
    {
      "id": 1,
      "name": "Paris",
      "url": "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Eiffel Tower",
          "text": "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France."
        },
        {
          "title": "Louvre Museum",
          "text": "The Louvre, or the Louvre Museum, is the world's largest art museum and a historic monument in Paris, France."
        }
      ]
    },
    {
      "id": 2,
      "name": "New York",
      "url": "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Statue of Liberty",
          "text": "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor."
        },
        {
          "title": "Central Park",
          "text": "Central Park is an urban park in New York City, located between the Upper West and Upper East Sides of Manhattan."
        }
      ]
    },
    {
      "id": 3,
      "name": "Tokyo",
      "url": "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Tokyo Tower",
          "text": "Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo, Japan."
        },
        {
          "title": "Shibuya Crossing",
          "text": "Shibuya Crossing is a popular scramble crossing in Shibuya, Tokyo, Japan."
        }
      ]
    },
    {
      "id": 4,
      "name": "Sydney",
      "url": "https://images.unsplash.com/photo-1598948485421-33a1655d3c18?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Sydney Opera House",
          "text": "The Sydney Opera House is a multi-venue performing arts centre in Sydney, Australia."
        },
        {
          "title": "Sydney Harbour Bridge",
          "text": "The Sydney Harbour Bridge is a heritage-listed steel through arch bridge across Sydney Harbour."
        }
      ]
    },
    {
      "id": 5,
      "name": "Rio de Janeiro",
      "url": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Christ the Redeemer",
          "text": "Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro, Brazil."
        },
        {
          "title": "Copacabana Beach",
          "text": "Copacabana is a bairro (neighbourhood) located in the South Zone of the city of Rio de Janeiro, Brazil."
        }
      ]
    },
    {
      "id": 6,
      "name": "London",
      "url": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Big Ben",
          "text": "Big Ben is the nickname for the Great Bell of the clock at the north end of the Palace of Westminster in London."
        },
        {
          "title": "London Eye",
          "text": "The London Eye is a cantilevered observation wheel on the South Bank of the River Thames in London."
        }
      ]
    },
    {
      "id": 7,
      "name": "Dubai",
      "url": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Burj Khalifa",
          "text": "Burj Khalifa is a skyscraper in Dubai, United Arab Emirates, and is the tallest building in the world."
        },
        {
          "title": "Palm Jumeirah",
          "text": "The Palm Jumeirah is an artificial archipelago in Dubai, in the United Arab Emirates."
        }
      ]
    },
    {
      "id": 8,
      "name": "Rome",
      "url": "https://images.unsplash.com/photo-1531572753322-ad063cecc140?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Colosseum",
          "text": "The Colosseum is an oval amphitheatre in the centre of the city of Rome, Italy."
        },
        {
          "title": "Vatican City",
          "text": "Vatican City is an independent city-state enclaved within Rome, Italy."
        }
      ]
    },
    {
      "id": 9,
      "name": "San Francisco",
      "url": "https://images.unsplash.com/photo-1450149632596-3ef25a62011a?q=80&w=2862&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Golden Gate Bridge",
          "text": "The Golden Gate Bridge is a suspension bridge spanning the Golden Gate, the one-mile-wide strait connecting San Francisco Bay and the Pacific Ocean."
        },
        {
          "title": "Alcatraz Island",
          "text": "Alcatraz Island is located in San Francisco Bay, 1.25 miles offshore from San Francisco, California."
        }
      ]
    },
    {
      "id": 10,
      "name": "Cape Town",
      "url": "https://images.unsplash.com/photo-1585061528750-3baca2cb6a10?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "facts": [
        {
          "title": "Table Mountain",
          "text": "Table Mountain is a flat-topped mountain forming a prominent landmark overlooking the city of Cape Town in South Africa."
        },
        {
          "title": "Cape of Good Hope",
          "text": "The Cape of Good Hope is a rocky headland on the Atlantic coast of the Cape Peninsula in South Africa."
        }
      ]
    }
  ];


  module.exports = locations;
  