new gridjs.Grid({
    pagination: {
        limit: 10,
        enable: true,
        summary: false,
    },
    columns: ['Fecha','Coche','Modelo'],
    server: {
        url: "https://swapi.dev/api/films/",
        then: (data) => data.results.map((movie)=>[movie.title, movie.director, movie.producer])
    }
    
}).render(document.getElementById("tabla"));