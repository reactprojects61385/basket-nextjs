export default function ProductPage({ data }) {
  return (
    <div className="container mx-auto">
      <div>
        <h1>{data.title}</h1>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { pid } = context.query;

  const response = await fetch(`https://dummyjson.com/products/${pid}`);
  const data = await response.json();

  return {
    props: {
      data,
    },
  };
}
