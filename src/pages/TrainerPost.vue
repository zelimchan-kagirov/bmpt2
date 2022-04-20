<template>
  <main class="blog-page">
    <div class="main-context container">
      <h1 class="main-header">Blog</h1>
    </div>
    <Partners />
  </main>
  <section class="container full-post">
    <h2 class="section-heading">Blog</h2>
    <hr class="gradient-hr" />
    <div class="page-content">
      <aside class="blog-page-aside">
        <p class="title">Recent Post</p>
        <router-link to="/trainer-blog">
          <div class="recent-post">
            <div class="post-info">
              <img src="../assets/img/post2.jpg" alt="post image" />
              <div>
                <h4 class="recent-post_title">Der Weg zum Kampfsport</h4>
                <p class="recent-post_date">Jul 28, 2019</p>
                <p class="recent-post_text">
                  Kampfsport ist ein komplexes Thema und es gibt viele
                  unterschiedliche Kampfsportarten.
                </p>
              </div>
            </div>
            <hr class="resent-post-hr" />
          </div>
        </router-link>
        <router-link to="/bmpt-blog">
          <div class="recent-post">
            <div class="post-info">
              <img src="../assets/img/post1.jpg" alt="post image" />
              <div>
                <h4 class="recent-post_title">getting yourself fit for you!</h4>
                <p class="recent-post_date">Jul 25, 2019</p>
                <p class="recent-post_text">
                  Kampfsport ist ein komplexes Thema und es gibt viele
                  unterschiedliche Kampfsportarten.
                </p>
              </div>
            </div>
            <hr class="resent-post-hr" />
          </div>
        </router-link>
      </aside>
      <article class="whole-post">
        <img src="../assets/img/post2Img.jpg" alt="" class="post-img" />
        <p class="post-date">Nov 29, 2021</p>
        <h3 class="post-title uppercase">Der Weg zum Kampfsport</h3>
        <p class="post-text">
          Kampfsport ist ein komplexes Thema und es gibt viele unterschiedliche
          Kampfsportarten. In diesem Artikel soll es um das Brazilian Jiu-Jitsu
          und um das Grappling gehen. Grappling wird im Kampfsport als Ausdruck
          für den Bodenkampf verwendet. Seit 1995 hat sich Grappling als eigener
          Kampfsport etabliert. In diesem Jahr wurde die NAGA („The North
          American Grappling Association“) gegründet und 2008 wurde die erste
          Grappling-WM ausgetragen. Bei dieser Sportart ist das Ziel, den Gegner
          zur Aufgabe zu zwingen, auch Abklopfen genannt. Man muss den Gegner in
          eine unvorteilhafte Position bringen und fixieren. Die Techniken die
          man dabei anwenden darf sind Hebel oder Würgegriffe. Bei einem Kampf
          muss man den Gegner aus dem Gleichgewicht bringen, um ihn dann auf dem
          Boden besser kontrollieren und fixieren zu können. Allerdings geht es
          beim Grappling in erster Linie nicht um Kraft, sondern um Technik und
          Strategie. Nun zum Grappling-Training: Bei dieser Sportart wird der
          gesamte Körper mit einbezogen. Beim Kampf sind die Wechsel zwischen
          Haltegriffen und den schnell angewandten Techniken sehr anstrengend
          und erfordern Ausdauer. Daher wird neben der Verbesserung der Technik
          auch viel Wert auf Ausdauertraining gelegt. Zudem muss der Körper
          dauerhaft unter Spannung sein, da man dem Gegner ansonsten eine große
          Schwachstelle bietet. Somit müssen die Muskeln durch Krafttraining
          gestärkt werden. Da Treten und Schlagen verboten ist hält sich das
          Verletzungsrisiko bei Grappling in Grenzen. Zur zusätzlichen
          Absicherung vereinbart man mit dem Trainingspartner ein Abklopfzeichen
          als Notsignal. Das Brazilian Jiu-Jitsu ist eine Abwandlung vom
          traditionellen japanischen Jiu-Jitsu und existiert seit ca. 100
          Jahren. Dabei handelt es sich ebenfalls um eine Form von Bodenkampf.
          Viele Elemente dieses Kampfsports sind sowohl bei MMA-Kämpfern, als
          auch bei Sicherheitskräften beliebt. Bei diesem Bodenkampf sind
          Schläge und Tritte ebenfalls nicht erlaubt. Stattdessen wendet man
          Griffe und Würfe an. Das Brazilian Jiu-Jitsu wird oft mit einem
          traditionellen Anzug ausgeübt, dem sogenannten Gi. Zusätzlich gibt es
          Gürtel die die Erfahrung des Kämpfers anzeigen. Dieser Kampfsport
          beginnt auch im Stehen, wird dann aber meistens auf dem Boden beendet.
          Die Kämpfe werden nach einem Punktesystem entschieden. Man hat zwei
          Möglichkeiten den Kampf zu gewinnen. Ein Kampf dauert fünf bis zehn
          Minuten. Während dieser Zeit erhält jeder Kämpfer Punkte für bestimmte
          Techniken und Aktionen. Falls ein Kämpfer seinen Gegner zur Aufgabe
          zwingt, hat er gesiegt. Wenn nach Ablauf der Zeit kein Kämpfer seinen
          Gegner zur Aufgabe zwingen konnte, gewinnt der Kämpfer mit der höheren
          Punktzahl. Auch hier sollte das Training eine gesunde Mischung aus
          Technik-, Audauer- und Kraftrainig sein, da das richtige Zusammenspiel
          dieser Fähigkeiten einen guten Kämpfer ausmacht. Zu guter Letzt noch
          der Unterschied zwischen Gi und No-Gi Grappling bzw. Brazilian
          Jiu-Jitsu. Wenn mit Gi gekämpft wird, können spezielle Techniken
          angewandt werden, die nur mit einem Gi möglich sind. Zum Beispiel ein
          Wurf bei dem man den Gegner am Kragen des Gi hält. Beim No-Gi Kampf
          werden Shorts und Kompressionshemden getragen. Auch hierbei gibt es
          Techniken, die ausschließlich mit dieser Kleidung verwendet werden
          können. Die beiden Kampfsportarten ähneln sich stark in Bezug auf
          erlaubte Techniken und den Kampf an sich. Die Ermittlung des Siegers
          bei Wettkämpfen dagegen unterscheidet sich durch das Punktesystem beim
          Brazilian Jiu-Jitsu.
        </p>
      </article>
    </div>
  </section>
</template>

<script>
import Partners from "@/components/Partners";
export default {
  components: {
    Partners,
  },
};
</script>

<style scoped>
.blog-page {
  background-image: url("../assets/img/blog-page.png");
}
/* styles can be found in full-post.scss */
</style>