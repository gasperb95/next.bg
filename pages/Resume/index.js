import Link from 'next/link';
import Layout from '../../components/layout';

export default function Code() {
  return (
    <Layout>
      <h1>My Resume</h1>
      <hr />
      <h2>Experience</h2>
      <h3>CVS Health</h3>
      <h4>Sr. Manager - Digital Supplmental Benefits - 2024 - Present</h4>
      <h5>Summary: Curated Digital Roadmap for our Supplemntal Benefits Business</h5>
      <p> 
        <ul>
          <li>Worked with cross functional teams to define and prioritize the digital roadmap</li>
          <li>Managed cross collaboration project with internal and external partners to bring the Aetna Extra Benefits Card Program in house, delivering approx. $60M in savings to the enterprise and increased OTCHS revenue </li>
          <li>Established weekly meeting with business leadership, design, engineering, and product to align on roadmap and features being delivered</li>
          <li>Identified member issue impacting conversion from analytics and coordinated a fix with design and engineering that increased place order success rate by 8%</li>
        </ul>
      </p>

      <h4>Manager - Front Store Web Experiences - 2021 - 2024</h4>
      <h5>Summary: Partnered with Dev team to deliver high impact features and capabilites</h5>
      <p> 
        <ul>
        <li>Created and achieved all deliverables of the full-year roadmap for front-end web team</li>
        <li>Supervised large tech migration project, enabling faster delivery of value to business stakeholders</li>
        <li>Oversaw both core shop features and OTCHS (benefits) features to create an integrated roadmap</li>
        <li>Delivered “Buy Online Pickup in Store” on CVS.com</li>
        <li>Partnered with external vendor to launch monetized placements and search on CVS.com</li>
        <li>Flexed to take on feature creation and sizing for both my team and the mobile app team while a Product Manager was on leave of absence</li>
        <li>Managed a contractor as direct supervisor</li>
        <li>Collaborated with senior leadership to achieve VP approval of new pricing zone and worked with app and web teams to get it implemented</li>
        </ul>
      </p>
      <hr />
      <h3> echo360 </h3>
      <h4>Product Owner - 2017 - 2021</h4>
      <h5>Summary: Utilized Full Stack Product Ownership to guide features from initial idea to customers </h5>
      <ul>
        <li>Drove the creation of a self-managed subscription model for a new SaaS product</li>
        <li>Worked cross-functionally with members from across the organization to set up connections with our CRM, ERP, and backend system to create a flow from Free Trial Sign Up to Customer Conversion</li>
        <li>Oversaw delivery of a custom integration for a Fortune 100 company’s custom learning platform</li>
        <li>Managed the creation of a partnership program to enable extension of Turning Technologies’ toolset into customers’ existing solutions to make the offered platform more accessible</li>
      </ul>
<hr />
<h2>Education</h2>
      <h3>Youngstown State University</h3>
      <h4>Bachelor of Science in Business Administration - Magna Cum Laude</h4>
      <p>2013 - 2017</p>
      <p>Williamson College of Business Administration</p>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </Layout>
  );
}