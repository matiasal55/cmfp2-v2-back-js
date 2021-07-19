# CMFP 2 - Backend

## Backend que forma parte del Proyecto de sitio web del Centro Municipal de Formación Profesional N°2 - Manuel Belgrano, ubicado en Morón (Buenos Aires, Argentina).

## Frontend:

https://github.com/matiasal55/cmfp2-v2-front

## Descripción:

Desarrollo de API con NodeJS y Express. Contiene endpoints de noticias y cursos.

## Historia:

Durante parte de 2018 y 2019 realicé los cursos de Redes Informáticas y Telefonía IP en el Centro de Formación mencionado. Los mismos fueron finalizados de manera exitosa y aprendí mucho en ambos cursos. Si bien no me dediqué a profesiones vinculadas a lo cursado, mucha de la información enriqueció mi carrera como desarrollador web.

En 2020 como parte de mi aprendizaje acerca del uso de tecnologías modernas de desarrollo web elaboré la primera versión de este proyecto con transpiladores como Pug, Sass y Babel, usando Javascript en su versión ECMAScript 6. Además se trabajó con Webpack para modularizar el código. Si bien el sitio quedó en buenas condiciones, era consciente que tenía mucho para mejorar.

En 2021 aprendí más acerca de React y creí que era un buen momento para rehacer el proyecto con esta librería, con el agregado del backend ya que sabía acerca de NodeJS. Al principio el traspaso de código de un lenguaje a otro fue difícil ya que en algunas partes no comprendía qué había hecho. Con los días pude acomodar las acciones, algunas repensandolas desde el lado de React. Y se pudo realizar en dos semanas la primera parte que abarca la parte principal de Frontend, pudiendo ser desplegada exitosamente.

La idea de este proyecto sirve como proyecto personal y a la vez será ofrecido a la institución, mediante el profesor de ambos cursos realizados con quien tuve una excelente relación.

<hr>

## Comandos a utilizar

### `npm start`

Inicia la API para poder consultar la información deseada. La url local es http://localhost:3000

### `npm run dev`

Inicia la API en modo desarrollador con Nodemon.

**Nota:** La API contiene variables de entorno vinculadas al puerto usado y a la base de datos de MongoDB deseadas. Para su comodidad, los valores pueden ser los siguientes:

**PORT:** 4000 (igualmente la API designa el puerto 4000 en caso de no hallar el valor de la variable).

**DB_URI:** mongodb://localhost:27017/cmfp2 (es imprescindible tener MongoDB instalado, sino este ejemplo podría no funcionar).

<hr>

## Herramientas utilizadas:

<div>
<img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/>
<img alt="Express.js" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
<img alt="MongoDB" src ="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"/>
</div>

-   NodeJS
-   Express
-   MongoDB (database)
-   Mongoose
-   Dotenv
-   CORS
-   Nodemon

<hr>

<img alt="GitHub" src="https://img.shields.io/github/license/matiasal55/cmfp2-v2-back-js?style=for-the-badge">
