import { contactData } from "../data";

const Contact = () => {
  const { title, info, form } = contactData;
  return (
    <section className="section">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 max-w-[500px]">{title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-5">
              {info.map((item, idx) => {
                const { title, subtitle, address, phone, email, link } = item;
                return (
                  <div key={idx}>
                    <h3 className="font-bold">{title}</h3>
                    <p className="mt-3">{subtitle}</p>
                    <div className="font-primary">
                      <div className="flex items-center gap-3 mt-3">
                        <div>{address.icon}</div>
                        {address.name}
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <div>{phone.icon}</div>
                        {phone.number}
                      </div>
                      <div className="flex items-center gap-3 mt-3">
                        <div>{email.icon}</div>
                        {email.address}
                      </div>
                      <a className="inline-block mt-6 pb-1 border-b-2 border-dark" href="#">{link}</a>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <form>
                <div className="flex flex-col gap-5">
                  <input className="bg-transparent border-b border-dark placeholder:text-[#555] outline-none pb-3" type="text" placeholder={form.name} />
                  <input className="bg-transparent border-b border-dark placeholder:text-[#555] outline-none pb-3" type="text" placeholder={form.email} />
                  <input className="bg-transparent border-b border-dark placeholder:text-[#555] outline-none pb-3" type="text" placeholder={form.message} />
                </div>

                <button className="mt-5 btn btn-dark btn-sm">{form.btnText}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
