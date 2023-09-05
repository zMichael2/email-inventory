export const changeConfirmedHtml = (email: string, code: string) => {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Recuperación de Contraseña</title>
    <!-- Agrega los enlaces a las hojas de estilo de Bootstrap aquí -->
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    />
  </head>
  <body
    class="bg-light d-flex align-items-center justify-content-center"
    style="min-height: 100vh"
  >
    <div class="container p-5 bg-white border rounded shadow">
      <div class="text-center">
        <h1 class="display-4 mb-4">Recuperación de Contraseña</h1>
        <p class="text-muted">
          Por favor, introduce tu dirección de correo electrónico.
        </p>
      </div>
      <div class="text-center mt-4 font-weight-bold">
        <p>
          Tu código de recuperación es: <span class="text-danger">${code}</span>
        </p>
      </div>
      <div class="text-center mt-4 font-weight-bold">
        <p>
          Para cambiar la contraseña use este enlace y mofificalo: <span class="text-danger">http://localhost:3000/verficatePassword/${email}/code/passwoard</span>
        </p>
      </div>
      <form
        action="http://localhost:3000/verficatePassword/${email}/code/passwoard"
        method="POST"
        class="mt-4"
      >
        <div class="form-group"></div>
        <div class="text-center mt-4">
          <button type="submit" class="btn btn-primary">Enviar Correo</button>
        </div>
      </form>
      <div class="text-center mt-4">
        <p class="text-muted">
          ¿Necesitas ayuda? <a href="#" class="text-primary">Haz clic aquí</a>
        </p>
      </div>
    </div>
  </body>
</html>
`;
};
