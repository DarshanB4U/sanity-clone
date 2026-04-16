import SanityLogo from "./SanityLogo";
import { Content } from "./Navbar";

function NavbarCard({ content }: { content: Array<Content> }) {
  const items = content[0].items;
  const itemsArray = Object.entries(items);
  console.log(itemsArray);
  return (
    <>
      <div className="bg-red-400 h-96 p-4 justify-items-center  text-white    w-full">
        <div className="flex h-full m-auto p-2 bg-red-300 bg-amber- gap-2">
          {/* item card */}
          {content.map((c) => {
            return (
              <div className="bg-black h-full  text-xl w-full text-blackh-full">
                <div className="p-2">{c.title}</div>
                {Object.entries(c.items).map((i) => {
                  const item = i[0].split("_");
                  console.log(item);

                  return (
                    <div>
                      {item.length > 1 ? (
                        <div>{item[0]}</div>
                      ) : (
                        <div>{`${item[0]} ${item[1]}`}</div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
          <div className="bg-black h-full  text-xl w-full text-blackh-full">
            <div className="p-2">{content[0].title}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarCard;
