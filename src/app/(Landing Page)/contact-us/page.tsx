import ContactForm from "@/components/client/forms/ContactForm";

export default function ContactUsLandingPage() {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center align-middle gap-y-2 flex-col">
        <div className="border bg-slate-100 w-full max-w-lg p-4 rounded shadow"></div>
        <div className=" border bg-slate-100 w-full max-w-lg p-4 rounded shadow">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
