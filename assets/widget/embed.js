/* FieldDesk quote widget v0.1 - zero-dependency embed.
   transport: email client (mailto) + SMS deep link; POST endpoint replaces
   both when the intake API lands. Config: window.FIELDDESK_CONFIG = {...} */
(function () {
  var C = window.FIELDDESK_CONFIG || {};
  var green = C.color || "#14584a";
  var btn = document.createElement("button");
  btn.textContent = C.cta || "Get a fast quote";
  btn.setAttribute("aria-label", (C.cta || "Get a fast quote") + " - open quote form");
  btn.style.cssText = "position:fixed;bottom:20px;right:20px;z-index:99999;background:" + green +
    ";color:#fff;border:none;border-radius:24px;padding:13px 18px;font:700 14px system-ui;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.25)";
  var panel = document.createElement("div");
  panel.style.cssText = "position:fixed;bottom:70px;right:20px;z-index:99999;display:none;width:290px;background:#fff;border-radius:14px;box-shadow:0 12px 40px rgba(0,0,0,.3);font:14px system-ui;color:#202924";
  var services = (C.services || ["a repair"]).map(function (s) { return "<option>" + s + "</option>"; }).join("");
  panel.innerHTML = '<div style="background:' + green + ';color:#fff;padding:12px 14px;border-radius:14px 14px 0 0;font-weight:700">' +
    (C.greeting || "Free quote in 60 seconds") + '</div><div style="padding:14px">' +
    '<input id="fd-name" aria-label="Your name" placeholder="Your name" style="width:100%;padding:9px;margin-bottom:8px;border:1px solid #ddd;border-radius:8px">' +
    '<input id="fd-phone" aria-label="Phone number" placeholder="Phone" style="width:100%;padding:9px;margin-bottom:8px;border:1px solid #ddd;border-radius:8px">' +
    '<select id="fd-job" aria-label="Type of job" style="width:100%;padding:9px;margin-bottom:8px;border:1px solid #ddd;border-radius:8px">' + services + '</select>' +
    '<textarea id="fd-msg" aria-label="What is going on" rows="2" placeholder="What\'s going on?" style="width:100%;padding:9px;margin-bottom:10px;border:1px solid #ddd;border-radius:8px"></textarea>' +
    '<button id="fd-send" aria-label="Send quote request" style="width:100%;background:' + green + ';color:#fff;border:none;border-radius:8px;padding:11px;font-weight:700;cursor:pointer">Send it</button>' +
    '<p style="margin-top:8px;font-size:.85rem;color:#555;text-align:center">or <a id="fd-sms" style="color:' + green + ';font-weight:700" href="#">text this instead</a> (opens your messages)</p>' +
    '</div>';
  function wire() {
    btn.onclick = function () { panel.style.display = panel.style.display === "none" ? "block" : "none"; };
    panel.querySelector("#fd-sms").href = "sms:" + (C.phone || "").replace(/[^0-9]/g, "");
    panel.querySelector("#fd-send").onclick = function () {
      var name = panel.querySelector("#fd-name").value || "(no name)";
      var phone = panel.querySelector("#fd-phone").value || "(no phone)";
      var job = panel.querySelector("#fd-job").value;
      var msg = panel.querySelector("#fd-msg").value;
      var body = "Quote request from the website:\n\nName: " + name + "\nPhone: " + phone +
        "\nJob: " + job + "\nDetails: " + msg + "\n\nSent by the FieldDesk quote widget.";
      var subject = "Quote request - " + job + " - " + name;
      var shopEmail = C.email || "";
      var shopPhone = (C.phone || "").replace(/[^0-9]/g, "");
      if (shopEmail) { window.location.href = "mailto:" + shopEmail + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body); }
      var sms = "Quote request: " + name + ", " + job + " - " + msg + " (call me: " + phone + ")";
      panel.querySelector("#fd-sms").href = "sms:" + shopPhone + "?body=" + encodeURIComponent(sms);
      panel.querySelector("#fd-send").textContent = "Sent - they get it instantly";
    };
  }
  function mount() { document.body.appendChild(btn); document.body.appendChild(panel); wire(); }
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", mount); } else { mount(); }
})();
