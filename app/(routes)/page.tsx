import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;
const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("7f624cb9-a305-4e53-bf3e-79b63da70ca4");
  return (
    <>
      <Container>
        <div className="space-y-2 pb-10">
          <Billboard data={billboard} />

          <div className="flex flex-col gap-y-8 px-4 sm:px-8">
            <ProductList title="Featured Products" items={products} />
          </div>
        </div>
      </Container>
    </>
  );
};

export default HomePage;
