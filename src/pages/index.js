import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h3>Aloha and Welcome</h3>
    <p>The Family Law Section of the Hawaii State Bar Association ("HSBA").  Membership is open to all HSBA attorney members in good standing.  
      The section meets monthly for education and discussion, conducts separate instructional programs,
      publishes its own educational materials, and actively participates with the Family Courts in all four Circuits in many joint activities to help those of Hawaii's families and children that have legal needs.
      The activities of the Section are purposely designed and structured to assist family law attorneys with all levels of skill and experience.
    </p>
    <h4>Interested in joining the Family Law Section?</h4>
    <p>If you are a licensed Hawaii attorney, and provide legal assistance to families and children, we cordially invite you to join the Family Law Section.</p>
   <p>Please contact <a href="mailto:michelle.moorhead@legalaidhawaii.org?subject=Interested in joining the Family Law Section" target="_blank">Michelle Moorhead</a> for more information</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>

    </div>

  </Layout>
)

export default IndexPage
