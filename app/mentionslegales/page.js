export default function MentionsLegales() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-3xl font-bold mb-6">Mentions Légales</h1>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Éditeur du site</h2>
        <p>
          Le présent site est édité par : <strong>Laura Turjman</strong>
          <br />
          Forme juridique : Entreprise Individuelle - Micro-Entreprise
          <br />
          Siège social : 52 rue Dr Rollet 69100 Villeurbanne
          <br />
          Immatriculation/SIRET : 94992724800011
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Directeur de publication</h2>
        <p>
          Le directeur de la publication est : <strong>Joris Fleurot</strong>,
          en qualité de Gérant.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Hébergeur du site</h2>
        <p>
          Le site est hébergé par : <strong>Vercel</strong>
          <br />
          Adresse : Vercel Inc. 340 S Lemon Ave #4133, Walnut, CA 91789,
          États-Unis
          <br />
          Téléphone : (559) 288-7060 (ou +1-888-880-4880)
          <br />
          Email : privacy@vercel.com (ou support@vercel.com)
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
          écrite préalable de <strong>Spline Studio</strong>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">
          Données personnelles & cookies
        </h2>
        <p>
          Le formulaire de contact du site collecte uniquement les informations
          nécessaires au traitement de la demande de l’utilisateur (nom, adresse
          e-mail, message). Ces données sont utilisées uniquement pour répondre
          à la demande et ne sont en aucun cas transmises à des tiers ni
          utilisées à des fins commerciales. Conformément au Règlement Général
          sur la Protection des Données (RGPD), vous pouvez exercer vos droits
          d’accès, de rectification et de suppression de vos données en nous
          contactant à : contact@splinestudio.fr.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Responsabilité</h2>
        <p>
          <strong>Spline Studio</strong> s’efforce d’assurer au mieux
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
