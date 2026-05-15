import React from "react";
import { useEffect } from "react";

const ensureMetaTag = (attribute, value) => {
  const selector = `meta[${attribute}="${value}"]`;
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, value);
    document.head.appendChild(tag);
  }

  return tag;
};

const ensureLinkTag = (rel) => {
  let tag = document.head.querySelector(`link[rel="${rel}"]`);

  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }

  return tag;
};

function Seo({
  title,
  description,
  keywords,
  imagePath = "/img/logo-michelle.png",
}) {
  useEffect(() => {
    const { origin, href } = window.location;
    const imageUrl = new URL(imagePath, origin).toString();
    const structuredDataId = "michelle-decoracoes-structured-data";

    document.title = title;

    ensureMetaTag("name", "description").setAttribute("content", description);
    ensureMetaTag("name", "keywords").setAttribute("content", keywords);
    ensureMetaTag("name", "robots").setAttribute("content", "index, follow");
    ensureMetaTag("property", "og:type").setAttribute("content", "website");
    ensureMetaTag("property", "og:locale").setAttribute("content", "pt_BR");
    ensureMetaTag("property", "og:site_name").setAttribute(
      "content",
      "Michelle Decoracoes"
    );
    ensureMetaTag("property", "og:title").setAttribute("content", title);
    ensureMetaTag("property", "og:description").setAttribute(
      "content",
      description
    );
    ensureMetaTag("property", "og:url").setAttribute("content", href);
    ensureMetaTag("property", "og:image").setAttribute("content", imageUrl);
    ensureMetaTag("name", "twitter:card").setAttribute(
      "content",
      "summary_large_image"
    );
    ensureMetaTag("name", "twitter:title").setAttribute("content", title);
    ensureMetaTag("name", "twitter:description").setAttribute(
      "content",
      description
    );
    ensureMetaTag("name", "twitter:image").setAttribute("content", imageUrl);
    ensureLinkTag("canonical").setAttribute("href", href);

    let script = document.getElementById(structuredDataId);

    if (!script) {
      script = document.createElement("script");
      script.id = structuredDataId;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      name: "Michelle Decoracoes",
      image: imageUrl,
      description,
      areaServed: "Santa Maria - RS",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Exemplo, 123",
        addressLocality: "Santa Maria",
        addressRegion: "RS",
        addressCountry: "BR",
      },
      telephone: "+55 55 99999-9999",
      email: "contato@michelle.com",
      url: href,
    });

    return () => {
      if (script?.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [description, imagePath, keywords, title]);

  return null;
}

export default Seo;
