
/* ===================================
   REDES SOCIALES DE YOHARIE
=================================== */

const paginas = [

    {
        nombre: "YouTube de Yoharie",
        url: "https://www.youtube.com/@yoharie",
        clase: "youtube"
    },

    {
        nombre: "Twitch de Yoharie",
        url: "https://www.twitch.tv/yoharie",
        clase: "twitch"
    },

    {
        nombre: "TikTok de Yoharie",
        url: "https://www.tiktok.com/@yoharieomg?lang=es",
        clase: "tiktok"
    }

];


/* ===================================
   CREAR REDES SOCIALES
=================================== */

const listaRedes = document.querySelector("#lista-redes");

if (listaRedes) {

    paginas.forEach((pagina) => {

        // CREAR ENLACE
        const enlace = document.createElement("a");

        // AGREGAR TEXTO
        enlace.textContent = pagina.nombre;

        // AGREGAR DIRECCIÓN
        enlace.href = pagina.url;

        // ABRIR EN OTRA PESTAÑA
        enlace.target = "_blank";

        enlace.rel = "noopener noreferrer";

        // AGREGAR CLASES CSS
        enlace.className =
            `enlace-plataforma ${pagina.clase}`;

        // AGREGAR BOTÓN AL CONTENEDOR
        listaRedes.appendChild(enlace);

    });

}
