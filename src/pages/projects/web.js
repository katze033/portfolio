import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from '../../components/layout';

import categoriesStyles from '../../components/modules/projects-categories.module.css'

import Img from 'gatsby-image'

//images
//import questForCute from '../../components/images/webprojects/quest-for-cute.png'

export const fitImage = graphql`
  fragment fitImage on File {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`


const ProjectsWebPage = () => {
  const data = useStaticQuery(graphql`
    query {
      luxury: file(relativePath: { eq: "web/luxury-prison.png" }) {
        ...fitImage
      }        nola: file(relativePath: { eq: "web/nola-vegan.png" }) {
          ...fitImage
        }
        quest: file(relativePath: { eq: "web/quest-for-cute.png" }) {
          ...fitImage
        }
        etch: file(relativePath: { eq: "web/etch-a-sketch.png" }) {
          ...fitImage
        }
        messageboard: file(relativePath: { eq: "web/messageboard.png" }) {
          ...fitImage
        }
      }
    `)
  return (
    <Layout>
      <div>
        <Link to="/projects">More projects</Link>
        <div className={categoriesStyles.webImages_container}>
          <a href="https://dreamy-hodgkin-878858.netlify.com/">
            <Img
              fluid={data.nola.childImageSharp.fluid}
              alt="A landing page for a vegan restaurant: text describing business overlaid on top of a dessert."
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>A simple, mobile responsive static site built from a modified HTML/CSS template.</p>

        <div className={categoriesStyles.webImages_container}>
          <a href="https://www.luxuryprison.com">
            <Img
              fluid={data.luxury.childImageSharp.fluid}
              alt="A landing page for a musician: the page links to various streaming channels and a mailing list alongside a black and white piece of art."
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>Sample musician profile. This lightweight landing page is built from pure html/css and links to various streaming channels and a mailing list.</p>

        <div className={categoriesStyles.webImages_container}>
          <a href="https://www.questforcute.com/">
            <Img
              fluid={data.quest.childImageSharp.fluid}
              alt="An online storefront for an Etsy gift shop featuring a colorful pencil case"
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>A static site for Quest for Cute, an Etsy gift shop stationed out of St. Paul, Minnesota. The goal was to create a more attractive alternative to the clients' Wordpress blog. Despite needing an aesthetic overhaul, it was important for the client to still have the ability to edit content easily. To accomodate this, I coded this site using GatsbyJS and Wordpress as a headless CMS.</p>

        <div className={categoriesStyles.webImages_container}>
          <a href="https://katze033-etchasketch.herokuapp.com/">
            <Img
              fluid={data.etch.childImageSharp.fluid}
              alt="White grid on black background"
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>An etch-a-sketch coded in JavaScript.</p>
        <div className={categoriesStyles.webImages_container}>
          <a href="https://katze033-minimessageboard.herokuapp.com/">
            <Img
              fluid={data.messageboard.childImageSharp.fluid}
              alt="Message board"
              className={categoriesStyles.webImages}
            />
          </a>
        </div>
        <p>A small message board architecture.</p>
        <Link to="/projects">More projects</Link>
      </div>
    </Layout>
  )
}

export default ProjectsWebPage


/*  Add later
<div className={categoriesStyles.webImages_container}>
</div>
<p>This is a website I coded for my personal music project. The main objective was to create a site that was fast, minimalist, and attractive. This site is comprised of simple HTML and CSS.</p>
*/