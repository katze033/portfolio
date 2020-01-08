import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'


export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ProjectsArtPage = () => {
  const data = useStaticQuery(graphql`
  query {
    satellite: file(relativePath: { eq: "art/satellite.png" }) {
      ...squareImage
    }
    page: file(relativePath: { eq: "art/page.png" }) {
      ...squareImage
    }
    boathouse: file(relativePath: { eq: "art/boathouse.png" }) {
      ...squareImage
    }
    city: file(relativePath: { eq: "art/city.png" }) {
      ...squareImage
    }
    plane: file(relativePath: { eq: "art/plane.png" }) {
      ...squareImage
    }
    plate: file(relativePath: { eq: "art/plate.png" }) {
      ...squareImage
    }
    rain: file(relativePath: { eq: "art/rain.png" }) {
      ...squareImage
    }
    terraform: file(relativePath: { eq: "art/terraform.png" }) {
      ...squareImage
    }
    treat: file(relativePath: { eq: "art/treat.png" }) {
      ...squareImage
    }
    tunnel: file(relativePath: { eq: "art/tunnel.png" }) {
      ...squareImage
    }
  }
`)
  return (
    <Layout>
      <div>
        <Link to="/projects">More projects</Link>
        <p>All of these images are coded using p5.js, a JavaScript library for creating graphic and interactive experiences. If you would like to purchase an 8x8 print, feel free to <Link to="/contact">contact</Link> me.</p>
        <div className={categoriesStyles.artFlex_container}>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.satellite.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>satellite</figcaption>
          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.page.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>page</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.boathouse.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>boathouse</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.city.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>city</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.plane.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>plane</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.plate.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>plate</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.rain.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>rain</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.terraform.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>terraform</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.treat.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>treat</figcaption>

          </div>
          <div className={categoriesStyles.art_container}>
            <Img
              fluid={data.tunnel.childImageSharp.fluid}
              alt="Generative art"
            />
            <figcaption>tunnel</figcaption>

          </div>
        </div>
        <Link to="/projects">More projects</Link>
      </div>
    </Layout>
  )
}

export default ProjectsArtPage