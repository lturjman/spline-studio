export default async function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Le présent site est édité par :{" "}
          <strong>[Nom de la société ou de la personne physique]</strong>
          <br />
          Forme juridique : [ex : SAS, SARL, micro-entreprise…]
          <br />
          Capital social : [montant en €]
          <br />
          Siège social : [adresse complète]
          <br />
          Immatriculation : [numéro RCS / SIREN / SIRET]
          <br />
          Numéro de TVA intracommunautaire : [si applicable]
          <br />
          Email : [adresse email de contact]
          <br />
          Téléphone : [numéro de contact]
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Directeur de publication</h2>
        <p>
          Le directeur de la publication est : <strong>[Nom, prénom]</strong>,
          en qualité de [fonction].
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Hébergeur du site</h2>
        <p>
          Le site est hébergé par : <strong>[Nom de l’hébergeur]</strong>
          <br />
          Adresse : [adresse complète de l’hébergeur]
          <br />
          Téléphone : [numéro de téléphone de l’hébergeur]
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu présent sur ce site (textes, images, logos,
          graphismes, vidéos, icônes, sons, logiciels…) est protégé par le droit
          d’auteur et la législation sur la propriété intellectuelle. Toute
          reproduction, représentation, modification, publication, adaptation de
          tout ou partie des éléments du site est interdite, sauf autorisation
          écrite préalable de{" "}
          <strong>[Nom de la société ou de la personne]</strong>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Données personnelles & cookies
        </h2>
        <p>
          Conformément au RGPD et à la loi « Informatique et Libertés » :<br />
          - Les données collectées via ce site sont utilisées uniquement pour
          [gestion des comptes, newsletter, formulaire de contact, etc.].
          <br />- Vous disposez d’un droit d’accès, de rectification,
          d’opposition, de suppression et de portabilité de vos données. Pour
          l’exercer, contactez <strong>[email DPO ou contact]</strong>.<br />-
          Ce site peut utiliser des cookies pour [statistiques, expérience
          utilisateur, etc.]. Vous pouvez gérer vos préférences depuis [bandeau
          cookies / paramètres du navigateur].
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
        <p>
          <strong>[Nom de la société]</strong> s’efforce d’assurer au mieux
          l’exactitude et la mise à jour des informations diffusées sur ce site.
          Toutefois, il ne peut garantir l’exactitude, la complétude ou
          l’actualité des informations publiées. L’utilisateur reconnaît
          utiliser ces informations sous sa responsabilité exclusive.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Droit applicable</h2>
        <p>
          Les présentes mentions légales sont régies par le droit français. En
          cas de litige et à défaut de solution amiable, compétence exclusive
          est attribuée aux tribunaux français compétents.
        </p>
      </section>
    </div>
  );
}
