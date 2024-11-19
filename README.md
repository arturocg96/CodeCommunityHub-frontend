# Code Community Hub

**Code Community Hub** es una plataforma web diseñada para conectar empresas con desarrolladores. Las empresas pueden buscar desarrolladores según sus tecnologías dominadas, servicios ofrecidos (freelance), experiencia y disponibilidad, mientras que los desarrolladores pueden mostrar su perfil profesional, incluyendo tarifas por hora, salarios esperados y un enlace a su CV. Además, la plataforma incorpora un chatbot inteligente para asistencia, basado en la API de OpenAI.

## 👨‍💻 Autor

- **Arturo Carrasco González**

---

## 📋 Características

### Para empresas:
- Registro de perfiles empresariales.
- Búsqueda y filtrado de desarrolladores:
  - Tecnologías dominadas.
  - Servicios ofrecidos (freelance).
  - Disponibilidad laboral.
  - Precio por hora y salario anual esperado.
- Envío de invitaciones para iniciar contacto.
- Descarga de CV de desarrolladores previa aceptación de invitaciones.
- Sistema de mensajería interno para contactar con los desarrolladores que aceptaron las invitaciones.

### Para desarrolladores:
- Creación de un perfil profesional:
  - Tecnologías dominadas.
  - Servicios ofrecidos.
  - Precio por hora y salario esperado.
  - Subida de CV.
  - Estado de disponibilidad laboral.
- Gestión de invitaciones recibidas de empresas.
- Comunicación con empresas a través del sistema de mensajería interno.

### Administrador:
- Validación de perfiles de desarrolladores y empresas.
- Gestión de usuarios y contenido.

### Funcionalidades adicionales:
- **Chatbot inteligente**: Ayuda a empresas y desarrolladores con consultas comunes mediante la integración de la API de OpenAI.
- **Geolocalización**: Uso de la API de Google Maps para localizar empresas y desarrolladores.
- **Notificaciones por correo**: Implementación de Nodemailer con OAuth2 para enviar notificaciones automáticas desde Gmail.

---

## 🛠️ Tecnologías utilizadas

- **Frontend**: Angular 18
- **Backend**: Node.js (con Express)
- **Base de datos**: MySQL
- **Estilos**: TailwindCSS
- **APIs integradas**:
  - **Google Maps API**: Para geolocalización y visualización en mapas.
  - **OpenAI API**: Para funcionalidades avanzadas de chatbot.
  - **Nodemailer con OAuth2 Gmail**: Para envío de notificaciones automáticas por correo.

---

