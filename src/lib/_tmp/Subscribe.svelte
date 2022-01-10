<script>
  let visible;
  function handleToggle() {
    visible = !visible;
  }
</script>

<footer>
  <div class="bc marquee fixed b0 r0 z200">
    <button class="p251251 {visible ? 'none' : ''}" on:click="{handleToggle}">
      +++Abonnement à <i>Plan Libre</i> 25€+++
    </button>
  {#if visible}
  <div class="p">

    <div class="flex jc-sb">
      <span></span>
      <h3>+++Abonnement annuel/10 numéros/25€+++</h3>
      <button on:click="{handleToggle}">×</button>
    </div>
    <slot></slot>
    <div class="flex wrap jc-center">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="DET375QCYNA9U">
        <table class="none">
        <tr><td><input type="hidden" name="on0" value=""></td></tr><tr><td><select name="os0">
          <option value="Abonnement annuel">Abonnement annuel : €25,00 EUR - annuel</option>
        </select> </td></tr>
        </table>
        <input type="hidden" name="currency_code" value="EUR">
        <input type="submit" class="btn" value="S’abonner">
        </form>
      <a
        rel="noopener"
        target="_blank"
        href="https://maop.fr/soutenir-la-maison"
        class="btn"
      >
        Soutenir la maison
      </a>
    </div>
  </div>
  {/if}
</footer>
