function SonDeClick() {

    var audio = document.getElementById("monmp3");

    if (audio.paused || audio.ended) {

        audio.volume = 1.0;
        audio.loop = false;
        audio.play();

    } ;
}

function UE(n) {

    switch(n) {

        case 1:
            SonDeClick();
            document.getElementById("text").innerHTML = templates[0];
            break;

        case 2:
            SonDeClick();
            document.getElementById("text").innerHTML = templates[1];
            break;

        case 3:
            SonDeClick();
            document.getElementById("text").innerHTML = templates[2];
            break;

        default:
            SonDeClick();
            document.getElementById("text").innerHTML = templates[0];

    }
}

const templates = [

    `<table cellpadding="10" cellspacing="0">
    <thead>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2" id="tableTitle">[UE1] Statistiques Avancées&emsp; - Régression Linéaire</td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
      <tr>
        <td id="MiseEnForme">Progression :</td>
        <td>
          ✓ Compris l'équation de régression <br>
          ✓ Utilisé des jeux de données réels <br>
          ✓ Testé plusieurs modèles (coefficients R²)
        </td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
      <tr>
        <td>Preuves :</td>
        <td><span onclick="SonDeClick()">TP 2 - Modélisation d'un dataset avec sklearn</span></td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
    </tbody>
    </table>`,
    `<table cellpadding="10" cellspacing="0">
    <thead>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2" id="tableTitle">[UE2] Machine Learning&emsp; - Arbres de Décision</td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
      <tr>
        <td id="MiseEnForme">Progression :</td>
        <td>
          ✓ Création d'un arbre de décision (classification) <br>
          ✓ Pruning pour améliorer la performance <br>
          ✓ Évalué l'importance des variables dans l'arbre
        </td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
      <tr>
        <td>Preuves :</td>
        <td><span onclick="SonDeClick()">TP 3 - Implémentation d'un arbre de décision en Python</span></td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
    </tbody>
  </table>`,
  `<table cellpadding="10" cellspacing="0">
    <thead>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td colspan="2" id="tableTitle">[UE3] BigData&emsp; - Hadoop et Spark</td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
      <tr>
        <td id="MiseEnForme">Progression :</td>
        <td>
          ✓ Installé un cluster Hadoop et exécuté Spark <br>
          ✓ Manipulé des datasets volumineux <br>
          ✓ Utilisé Spark SQL pour effectuer des requêtes sur les données
        </td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
      <tr>
        <td>Preuves :</td>
        <td><span onclick="SonDeClick()">TP 4 - Traitement de données volumineuses avec Spark</span></td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
    </tbody>
  </table>`

]