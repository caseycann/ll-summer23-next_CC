
import { table, minifyItems } from "../utils/Airtable";

export async function getServerSideProps(context) {
    try {
      const items = await table.select({}).firstPage();
      return {
        props: {
          initialItems: minifyItems(items),
        },
      };
    } catch (error) {
      console.log(error);
      return {
        props: {
          err: "Something went wrong 😕",
        },
      };
    }
  }

export default function Home({ initialItems }) {
  // ...
  return (
    console.log(JSON.stringify(initialItems, null, 4))
  );

  // ...
}

//        

