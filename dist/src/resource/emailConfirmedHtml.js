"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailConfirmed = void 0;
const emailConfirmed = (email, code) => {
    return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Confirmación de Correo Electrónico</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #1f3557; /* Fondo oscuro azul */
        margin: 0;
        padding: 0;
      }
      .card {
        background-color: #e0e9f4;
      }
    </style>
  </head>
  <body>
    <div class="container py-3">
      <div class="row justify-content-center">
        <div class="col-md-8">
          <div class="card shadow">
            <div class="card-body text-center">
              <img
                src="https://ci5.googleusercontent.com/proxy/0wdRU0Ee7gB6NuJFDq3ohpDanBXnJ7aTyLGZOV1B5Zb5xRv5GkDj9szEJxg_GNGdvypEAe6SGBBrMJNrKDuOrD2gmPe0A1ciEgp4taJ4XwItxBCItFc1yKPZn9iD6fPj_0tDKXO9dm1JG0Vop9YLsRCFlK49xYdGjkmR8FBPMadLDXIwFg=s0-d-e1-ft#https://ahgxcn.stripocdn.email/content/guids/CABINET_67e080d830d87c17802bd9b4fe1c0912/images/55191618237638326.png"
                alt="Logo de Taiwiling"
                class="w-40 mx-auto mb-3"
                height="150"
              />
              <h2 class="text-primary fs-5">
                Confirmación de Correo Electrónico
              </h2>
              <p class="text-muted fs-6">Estimado/a Cliente,</p>
              <p class="fs-6">
                ¡Bienvenido/a a nuestro servicio! Por favor, confirma tu
                dirección de correo electrónico para empezar a disfrutar de
                todas nuestras funcionalidades.
              </p>
              <p class="mt-3">
                <a
                  href="http://localhost:3000/verification/${email}/${code}"
                  class="btn btn-primary btn-sm"
                  >Confirmar Correo Electrónico</a
                >
              </p>
              <p class="fs-6 mt-2">
                Si el botón no funciona, también puedes copiar y pegar el
                siguiente enlace en tu navegador web:
              </p>
              <p class="mt-1">
                <a href="[Enlace de Confirmación]">[Enlace de Confirmación]</a>
              </p>
              <p class="mt-3 fs-6">
                Gracias por unirte a nosotros. Esperamos que tengas una
                experiencia increíble.
              </p>
              <p class="fs-6">Atentamente,<br />El Equipo de API REST AUTH</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>
`;
};
exports.emailConfirmed = emailConfirmed;
