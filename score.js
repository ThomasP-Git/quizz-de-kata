function afficherScore() {
  const bonnes = document.querySelectorAll('input[value="1"]:checked').length;
  const total = document.querySelectorAll('fieldset').length;
  document.getElementById('resultat').textContent = 'Score : ' + bonnes + ' / ' + total;
  // Colore chaque question : verte si juste, rouge si fausse ou sans réponse
  document.querySelectorAll('fieldset').forEach(function (question) {
    const juste = question.querySelector('input[value="1"]:checked');
    question.className = juste ? 'juste' : 'erreur';
  });
}
