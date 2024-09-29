function SonDeClick(n) {

  switch(n) {

    case 1:
      var audio = document.getElementById("click");

      if (audio.paused || audio.ended) {

          audio.volume = 1.0;
          audio.loop = false;
          audio.play();

      };
      break;

    case 2:
      var audio = document.getElementById("dblClick");

      if (audio.paused || audio.ended) {

          audio.volume = 1.0;
          audio.loop = false;
          audio.playbackRate = 1.3;
          audio.play();

      };
      break

  }
}

function loadImg(n) {

    switch(n) {

      case 1:
        SonDeClick(1);
        document.getElementById("preuve").src = "../imgs/ue" + n + ".webp";
        break;

      case 2:
        SonDeClick(1);
        document.getElementById("preuve").src = "../imgs/ue" + n + ".webp";
        break;

      case 3:
        SonDeClick(1);
        document.getElementById("preuve").src = "../imgs/ue" + n + ".webp";
        break;

    }

}

function UE(n) {

    switch(n) {

        case 1:
            SonDeClick(2);
            document.getElementById("text").innerHTML = templates[0];
            break;

        case 2:
            SonDeClick(2);
            document.getElementById("text").innerHTML = templates[1];
            break;

        case 3:
            SonDeClick(2);
            document.getElementById("text").innerHTML = templates[2];
            break;

        default:
            SonDeClick(2);
            document.getElementById("text").innerHTML = templates[0];

    }
}

function showImg(){

  SonDeClick(1);

  var source;
  var img;

  source = document.getElementById("preuve").src;
  img = new Image();
  img.src = source;

  if (source != "") {

    window.open(source, "_blank", `width=${img.width}, height=${img.height}`);

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
        <td>Preuve :</td>
        <td><span onclick="loadImg(1)">TP 2 - Modélisation d'un dataset avec sklearn</span></td>
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
        <td>Preuve :</td>
        <td><span onclick="loadImg(2)">TP 3 - Implémentation d'un arbre de décision en Python</span></td>
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
          ✓ Utilisé Spark SQL pour effectuer des requêtes
        </td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
      <tr>
        <td>Preuve :</td>
        <td><span onclick="loadImg(3)">TP 4 - Traitement de données volumineuses avec Spark</span></td>
      </tr>
      <tr>
        <th colspan="2">##############################################################</th>
      </tr>
    </tbody>
  </table>`

]