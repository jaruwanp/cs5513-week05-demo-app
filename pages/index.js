import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = getSortedList();
  return {
    props: {
      allData
    }
  }
}
export default function Home({ allData }) {
  return (
        <Layout home>
        <h2>List of People</h2>
        <p>Use dynamic routing to create a page component to display complete details about individual persons that retrieves data from at least two JSON files to render links to other related persons.
        </p>
        <div className="list-group">
          {allData ?
            allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))
          : null 
          }
        </div>
      </Layout>
  );
}
