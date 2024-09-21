import { PrimaryButton } from "../../router";
import { Caption, commonClassNameOfInput, Title } from "../../components/common/Design";

export const UpdateCategory = () => {
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Update Category
        </Title>

        <form>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input type="text" name="title" className={`${commonClassNameOfInput}`} />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            Update
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};
