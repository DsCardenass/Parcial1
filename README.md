# Parcial1

Este es el examen parcial 1 del curso de Desarrollo Web.

# Desarrollador:

    Dionny S. Cárdenas
    Código de estudiante: 201921484

# Tecnologías Utilizadas

    React: El examen ha sido desarrollado utilizando la biblioteca de JavaScript React.
    react-router-dom: Se ha utilizado para la gestión de las rutas y navegación dentro de la aplicación.
    react-intl: Utilizado para la internacionalización de la aplicación, permitiendo la traducción de mensajes.
    react-bootstrap: Se hace uso de esta biblioteca para componentes de interfaz de usuario.
   
# Desarrollo de la Aplicación

El examen parcial del ciclo 1 ha sido desarrollado utilizando React como la biblioteca principal. Para desarrollar las 2 vistas necesarias para el examen (Home y perfil) se hizo la creación de 2 componentes (Homepage y Profile respectivamente).
La aplicación se inicia siempre en el Homepage. Se ha implementado la navegación entre las diferentes páginas utilizando react-router-dom. Con esta navegación es posible clickear la foto de perfil en la homepage para dirigirse al componente que permite modificar los datos del perfil, como tambien se añadió un botón extra al que aparecía en el enunciado para poder volver al Home sin tener que usar los botones directos del navegador (atrás y adelante). Se deseaba utilizar un solo boton pero se decidió utilizar 2 para poder dar un mensaje de confirmación de los cambios al perfil, o verificar que todas las casillas esten llenas antes de guardarlo, esto con el objetivo de mantener el perfil con su formato correcto y no tener información vacía. Para rellenar el perfil, se utilizó un .json generado por mockaroo de una sola persona, este se carga en el homepage, y se carga tambien en profile para hacer los cambios. Por cuestiones de solo ser front, los cambios se mantienen reflejados en la misma sesión, pero en caso de recargar la página, no se se mantien, así que no hay persistencia, pero la información se guarda siempre y cuando se mantenga en la misma sesión. Se utilizó bastantes clases de CSS debido a falta de experiencia con bootstrap, mi mayor pérdida de tiempo durante el examen fue directamente instalarlo e importarlo, como tambien aprender a usarlo, tengo experiencia con CSS y TailwindCSS, directamente tambien tuve confusiones entre Boostrap y React-Boostrap (diferentes). 
Evité hacer peticiones GET para las imagenes debido a que el mismo Lorem Picsum, permite hacer llamados directos al URL con parametros en el mismo link para determinarlas, es posible elegir las medidas, como tambien que tengan un ID único que permita mantener la foto persistente en toda la aplicación, por si deseo llamarla de regreso en cualquier otro componente y ésta no cambie, de esa forma se logró elegir una distinta para la foto de perfil, 12 de las publicaciones, y la del background del componente Profile, e incluso que al clickear, se agrandace sin tener la imagen descargada, guardada o constante.
Además, se ha integrado react-intl para la internacionalización de la aplicación, permitiendo que los usuarios puedan ver el contenido en diferentes idiomas, así que tanto los textos, label e información tanto de la Homepage y Profile se encuentran disponibles en ingles y español. Para visualizarlos solo es cambiar el Es por En en el **index.js**, como tambien el llamado al import de los .JSON de ambos idiomas.
