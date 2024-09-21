import { Caption, Title } from "../../router";
import { commonClassNameOfInput, PrimaryButton } from "../../components/common/Design";

export const UpdateProductByAdmin = () => {
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Update Product
        </Title>
        <hr className="my-5" />
        <div className="create-product">
          <form>
            <div className="w-full">
              <Caption className="mb-2">Commission *</Caption>
              <input type="number" name="commission" className={`${commonClassNameOfInput}`} />
            </div>
            <PrimaryButton type="submit" className="rounded-none my-5">
              Update
            </PrimaryButton>
          </form>
        </div>
      </section>
    </>
  );
};
