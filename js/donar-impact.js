window.addEventListener("message", function (event) {

  if (event.origin !== "https://embed.donaronline.org") return;

  const msg = event.data;

  if (msg.type === "properties:step") {

    const stepName = msg.data.name;

    const titles = {
      donation: "👉 Hoy puedes hacer que una familia esté cerca de su hijo mientras recibe tratamiento médico",
      donor: "Completa tus datos para continuar 💙",
      payment_method: "Elige tu método de pago 💳",
      thanks: "Gracias por apoyar a las familias 💛"
    };

    const el = document.getElementById("donation-title");

    if (el) {
      el.innerText = titles[stepName] || "Fundación Casa Ronald";
    }
  }

});
