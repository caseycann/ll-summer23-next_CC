
import { table, minifyItems } from "../utils/airtable";

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

  export default function sendData({ initialItems }) {
    for (let i = 0; i < initialItems.length; i++) {
      const jsonItems = initialItems[i];
      console.log(JSON.stringify(jsonItems.fields.ShootIDOverride, null, 4));
    }
  
    return null; // You need to return JSX or null from the component
  }

  // export { sendData };