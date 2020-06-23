<script>
  let visible;
  function handleToggle() {
    visible = !visible;
  }
</script>
<header class="fixed t0 r0 p25 z10 max">
  <h1><button on:click="{handleToggle}">Maxime Delvaux</button></h1>
</header>

{#if visible}
<div class="modal p25">
  <div class="w100 flex jc-sb">
    <div class="flex wrap">
      <div>
        <span>Mail: </span
        ><a href="mailto:maxdelv@gmail.com">maxdelv@gmail.com</a
        ><span>&nbsp;&nbsp;</span>
      </div>
      <div>
        <span>Tel: </span><a href="tel:0032472427942">+32 472 42 79 42</a>
      </div>
    </div>
    <div class="">
      <button on:click="{handleToggle}">×</button>
    </div>
  </div>

  <p>
    Maxime Delvaux (1984, Belgium) lives and works in Brussels. Belgian
    photographer specialised in architecture, he graduates from INRACI in
    Brussels in 2008. He also worked on the creation of pictures with the
    curators of the Belgian Pavilion at the Venice Biennale of Architecture
    2014. In addition, he is the author of the video clips and pictures of the
    exhibition/catalogue of WBA in Paris: “entrer:” and his work is presented in
    the exhibition Landskating organised by the Villa Noailles in Hyères in
    2016.
  </p>
</div>
{/if}