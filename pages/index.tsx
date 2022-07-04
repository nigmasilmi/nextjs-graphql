import { useQuery } from "@apollo/client";
import Head from "next/head";
import Image from "next/image";
import {
  GetLaunchesDocument,
  GetLaunchesQuery,
  GetLaunchesQueryVariables,
} from "../generated";
import styles from "../styles/Home.module.css";

interface ILaunch {
  id: string;
  mission_name: string;
  launch_date_local: string;
  launch_site: object;
  links: { video_link: string };
  rocket: object;
}

interface IHomeProps {
  launches: ILaunch[];
  children?: React.ReactNode;
}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const { data, error, loading } = useQuery<
    GetLaunchesQuery,
    GetLaunchesQueryVariables
  >(GetLaunchesDocument);
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX latest launches</title>
        <meta name="description" content="SpaceX launches" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>SpaceX Launches</h1>

        <p className={styles.description}>Latest launches from SpaceX</p>

        <div className={styles.grid}>
          {data?.launchesPast?.map((launch) => {
            return (
              <a
                key={launch?.id}
                href={launch?.links?.video_link}
                className={styles.card}
              >
                <h3>{launch?.mission_name}</h3>
                <p>
                  <strong>
                    Launch Date:
                    {new Date(launch?.launch_date_local).toLocaleDateString(
                      "en-US"
                    )}
                  </strong>
                </p>
              </a>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
