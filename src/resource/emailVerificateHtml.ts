export const emailVerificateHtml = () => {
  return `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Correo Confirmado</title>
    <!-- Bootstrap CSS -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <style>
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        margin: 0;
        padding: 0;
      }
      .card {
        background-color: #ffffff;
        border: none;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      }
      .blue-title {
        color: #3498db;
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
              <h2 class="fs-5 blue-title">¡Correo Confirmado!</h2>
              <p class="fs-6">Estimado/a Cliente,</p>
              <p class="fs-6">
                Gracias por confirmar tu dirección de correo electrónico. Ahora
                estás listo/a para disfrutar de todas nuestras funcionalidades.
              </p>
              <p class="fs-6 mt-3">
                Si tienes alguna pregunta o necesitas asistencia, no dudes en
                contactarnos.
              </p>
              <p class="mt-3 fs-6">
                ¡Esperamos que tengas una experiencia increíble con nosotros!
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
