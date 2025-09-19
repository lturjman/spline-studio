/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.prismic.io",
        pathname: "/spline-studio/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/societe-production-audiovisuelle-lyonspline-studio-film/",
        destination: "/splinestudio",
        permanent: true,
      },
      {
        source: "/realisations-films-lyon-spline-studio/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/backstage-societe-production-audiovisuelle-lyon/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/contact-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/video/bord-cadre-7-sh-rt-le-film-de-noel/",
        destination: "/films/bord-cadre",
        permanent: true,
      },
      {
        source: "/video/im-ready-clip-cover-chung-ha-by-iam-aleksayyy/",
        destination: "/films/im-ready",
        permanent: true,
      },
      {
        source: "/video/food-reel-2024/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/la-croix/",
        destination: "/films/la-croix",
        permanent: true,
      },
      {
        source: "/video/bord-cadre-2-sh-rt-tu-tes-fait-avoir-par-linflation/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/sh-ort-jacques-devient-cascadeur/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/ifcv-luxe/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/le-royaume-du-queyras-pub-tourisme/",
        destination: "/films/le-royaume-de-queyras",
        permanent: true,
      },
      {
        source: "/video/lyon-events-2024-home-of-excellence/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/sumi-gaeshi-clip/",
        destination: "/films/sumi-gaeshi",
        permanent: true,
      },
      {
        source: "/video/out-of-time-two-faces/",
        destination: "/films/two-faces-out-of-time",
        permanent: true,
      },
      {
        source: "/video/philibert-savours-film-de-marque/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/enphase-energy-film-temoignage-client/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/valrhona-collection-2022/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/mademoiselle-desserts/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/vous-avez-raison-only-lyon/",
        destination: "/films/only-lyon-vouas-avez-raison",
        permanent: true,
      },
      {
        source: "/video/vie-veranda-web-serie-de-marque/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/two-faces-unspeakable-things-clip/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/le-tourisme-daffaire-a-saint-etienne/",
        destination: "/films/saint-etienne-tourisme-daffaire",
        permanent: true,
      },
      {
        source: "/video/ballin-coco-lychee-clip/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/matiere-filmique-showreel-2021/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/saint-etienne-hors-cadre-pub-tourisme-2/",
        destination: "/films/st-etienne-hors-cadre",
        permanent: true,
      },
      {
        source: "/video/la-piscine-serie/",
        destination: "/films/agent-rose",
        permanent: true,
      },
      {
        source: "/video/monter-les-potards-court-metrage/",
        destination: "/films/monter-les-potards",
        permanent: true,
      },
      {
        source: "/video/kntc-duality-clip/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/premier-amour-martin-luminet-clou/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/coeur-martin-luminet-clip/",
        destination: "/films/martin-luminet-coeur",
        permanent: true,
      },
      {
        source: "/video/study-case-winterhalter-x-spline-studio/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/study-case-vie-et-veranda-x-spline-studio/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/study-case-bv-sport-x-spline-studio/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/lys-yyz-clip/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/kntc-melatonin/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/kntc-hunting-hunters-hunting-prays/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/maison-fontaine-x-cake-lucky/",
        destination: "/films",
        permanent: true,
      },
      {
        source: "/video/la-vie-de-chateau-film-lifestyle/",
        destination: "/films/la-vie-de-chateau",
        permanent: true,
      },
      {
        source: "/video/je-suis-une-chute-court-metrage/",
        destination: "/films/je-suis-une-chute",
        permanent: true,
      },
      {
        source: "/video/dealeuse-de-chiffons-teaser/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/matthieu-otto-silence-dor-film-entreprise-documentaire-fiction-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/matthieu-otto-film-entreprise-documentaire-fiction-spline-studio-societe-production-audiovisuelle/",
        destination: "/films/la-mesure-de-l-or",
        permanent: true,
      },
      {
        source:
          "/video/smile-film-court-metrage-fiction-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/two-faces-silence-clip-musique-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/woodlark-session-interview-not-scientists-musique-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/kosmic-session-effigie-moon-interview-musique-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/kosmic-session-two-faces-devil-interview-musique-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/kosmic-session-leila-interview-musique-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/angl-jours-dorage-clip-musique-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
      {
        source:
          "/video/cycles-short-movie-clip-court-metrage-spline-studio-societe-production-audiovisuelle-lyon/",
        destination: "/films",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
