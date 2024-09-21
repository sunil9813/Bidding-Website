import { Caption, PrimaryButton, Title } from "../../router";
import { commonClassNameOfInput } from "../../components/common/Design";

export const CreateCategory = () => {
  return (
    <>
      <section className="bg-white shadow-s1 p-8 rounded-xl">
        <Title level={5} className=" font-normal mb-5">
          Create Category
        </Title>
        <form>
          <div className="w-full my-8">
            <Caption className="mb-2">Title *</Caption>
            <input type="text" className={`${commonClassNameOfInput}`} placeholder="Title" required />
          </div>

          <PrimaryButton type="submit" className="rounded-none my-5">
            CREATE
          </PrimaryButton>
        </form>
      </section>
    </>
  );
};
