---
layout: base.njk
title: Contato
---

<h1>Contato</h1>

<p>Gostou de algum texto? Quer trocar uma ideia sobre escrita? Ficarei feliz em ouvir você.</p>

<form class="contact-form" action="https://formspree.io/f/SEU_ID_AQUI" method="POST">
  <div class="form-group">
    <label for="name">Nome</label>
    <input type="text" id="name" name="name" required>
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input type="email" id="email" name="email" required>
  </div>
  
  <div class="form-group">
    <label for="message">Mensagem</label>
    <textarea id="message" name="message" required></textarea>
  </div>
  
  <button type="submit" class="btn">Enviar</button>
</form>

<hr style="border: none; border-top: 1px dashed var(--border-color); margin: 2rem 0;">

<h2>Outras formas de contato</h2>

<p>Você também pode me encontrar em:</p>

<ul>
  <li>Email: <a href="mailto:seu@email.com">seu@email.com</a></li>
  <li>Twitter/X: <a href="https://twitter.com/seuuser" target="_blank">@seuuser</a></li>
  <li>Instagram: <a href="https://instagram.com/seuuser" target="_blank">@seuuser</a></li>
</ul>

<p><em>Nota: Para o formulário funcionar, você precisa criar uma conta gratuita no <a href="https://formspree.io" target="_blank">Formspree</a> e substituir "SEU_ID_AQUI" pelo seu ID.</em></p>
