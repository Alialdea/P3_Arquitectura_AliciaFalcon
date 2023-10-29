# P3_Arquitectura_AliciaFalcon
ENDPOINTS.
GET.
/obtainDiscs -> Devuelve todos elementos
/obtainID/:id -> Filtra por id
/obtainName/:nombre -> Filtra por nombre
/obtainFormat/:formato -> Filtra por formato
/obtainCountry/:paisImpr -> Filtra por pais

POST
/addDisc -> Crea un disco nuevo 
(requiere Json de body)

PUT
/updateDisc/:id -> Actualiza un disco
(requiere Json de body)

DELETE
/deleteDisc/:id -> Elimina un disco
(requiere Json de body)

Estructura
nombre, autor, formato, matriz?, paisImpr, portada
(todos string menos formato)

Formato
LP, CD, single, cassette, reel_to_reel, minidisc, videocd, vinyl
