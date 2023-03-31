 
 
import Modal from "@ui/atom/modal/index.tsx";
import FormData from "../../../components/admin/our-industries/form";

export default   function IndexPage({
  
}: {
 
}) {
   
  return (
    <div>
      <div className="flex justify-end w-full">
        <Modal
          label={`${t.add} ${t["our-industries"]}`}
          children={<FormData t={t} />}
        />
      </div>
    </div>
  );
}
