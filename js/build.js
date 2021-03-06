let style = `
  <style>
  .lw-overlay {
    z-index: 999;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(1, 1, 1, 1);
  }.lw-overlay:target {
    visibility: visible;
    opacity: 1;
  }.lw-popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 2s ease-in-out;
  }.lw-popup .content {
    max-height: 30%;
    overflow: auto;
  }
  </style>
`

let warning = `
  <div id="popup" class="lw-overlay">
    <div class="lw-popup">
      <h2>Achtung!</h2>
      <div class="lw-content">
        <p>
          Diese Seite ist zurzeit aus Wartungsgründen nicht verfügbar. Normalerweise sollte eine automatische Weiterleitung erfolgen
          <br><br>
          <center><a href="https://cavecraft.github.io/maintenance">Klick mich</a></center>
        </p>
      </div>
    </div>
  </div>
`

if (window.pageBlocked !== false) {
  $("head").prepend(style)
  $("body").append(warning)
}