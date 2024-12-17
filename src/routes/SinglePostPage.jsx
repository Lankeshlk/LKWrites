import { Link } from "react-router-dom";
import Postmenuaction from "../components/Postmenuaction";
import Search from "../components/Search";
import Comments from "../components/Comments";

const SinglePostPage = () => {
  return (
    <div className=" flex flex-col gap-8">
      {/* details */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span className="">Written by</span>
            <Link className="text-blue-800">Sathu</Link>
            <span className="">on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span className="">2 days ago</span>
          </div>
          <p className="text-gray-500 text-medium">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            animi reiciendis officiis nemo fugiat earum totam, dolorem iusto
            quos sed!
          </p>
        </div>

        <div className="hidden lg:block w-2/5">
          <img src="postImg.jpg" w="600" className="rounded-3xl " />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12">
        <div className="lg:text-lg flex flex-col gap-6 text-justify ">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus
            ullam facere accusantium consectetur, sit cumque, iusto quod
            voluptatum neque qui beatae provident. Pariatur suscipit eaque
            veritatis iure ratione consequatur temporibus maxime ipsa quasi ex
            aliquam fugit eos architecto quod ut obcaecati deleniti facilis,
            doloribus illum accusantium odit quis necessitatibus dicta! Suscipit
            corrupti dolor officiis, sunt iure odit consequuntur reprehenderit
            amet consectetur maxime dicta ad modi facere dolorum corporis veniam
            porro hic obcaecati deserunt. Dignissimos odit eum ad dolorum fuga
            quia perferendis deleniti doloribus suscipit rerum! Quod officia
            voluptatibus culpa saepe quidem perferendis ipsam ea aperiam
            consectetur eveniet? Ipsum, totam iusto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quos eius iste quisquam non corporis vel a nobis ducimus! Veritatis
            sapiente optio nostrum voluptatem voluptate laudantium iusto magni
            non labore voluptatum, ipsam ex maxime iure animi, atque ipsum rerum
            tenetur perspiciatis harum eveniet? Nostrum, perspiciatis dolorum.
            Facere ratione, doloribus voluptatem voluptatibus nisi facilis
            tempora praesentium quia qui eveniet itaque provident accusantium,
            vitae ullam tenetur, voluptate aspernatur nemo sit? Nam cumque totam
            nobis, tempora voluptatem dignissimos eligendi harum natus
            aspernatur illo quod nihil cum facere placeat repellat delectus
            atque quos sunt fuga ipsum. Architecto ex cupiditate libero, quia
            accusamus odio vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quos eius iste quisquam non corporis vel a nobis ducimus! Veritatis
            sapiente optio nostrum voluptatem voluptate laudantium iusto magni
            non labore voluptatum, ipsam ex maxime iure animi, atque ipsum rerum
            tenetur perspiciatis harum eveniet? Nostrum, perspiciatis dolorum.
            Facere ratione, doloribus voluptatem voluptatibus nisi facilis
            tempora praesentium quia qui eveniet itaque provident accusantium,
            vitae ullam tenetur, voluptate aspernatur nemo sit? Nam cumque totam
            nobis, tempora voluptatem dignissimos eligendi harum natus
            aspernatur illo quod nihil cum facere placeat repellat delectus
            atque quos sunt fuga ipsum. Architecto ex cupiditate libero, quia
            accusamus odio vel.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            quos eius iste quisquam non corporis vel a nobis ducimus! Veritatis
            sapiente optio nostrum voluptatem voluptate laudantium iusto magni
            non labore voluptatum, ipsam ex maxime iure animi, atque ipsum rerum
            tenetur perspiciatis harum eveniet? Nostrum, perspiciatis dolorum.
            Facere ratione, doloribus voluptatem voluptatibus nisi facilis
            tempora praesentium quia qui eveniet itaque provident accusantium,
            vitae ullam tenetur, voluptate aspernatur nemo sit? Nam cumque totam
            nobis, tempora voluptatem dignissimos eligendi harum natus
            aspernatur illo quod nihil cum facere placeat repellat delectus
            atque quos sunt fuga ipsum. Architecto ex cupiditate libero, quia
            accusamus odio vel.
          </p>
        </div>

        <div className="px-4 h-max w-max sticky top-8 ">
          <h1 className=" mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className=" flex items-center gap-8">
              <img
                src="userImg.jpg"
                className="w-12 h-12 rounded-full object-cover"
                w="48"
                h="48"
              />
              <Link>Sathu</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet consectetur.</p>
            <div className="flex gap-2">
              <Link>
                <img src="instagram.svg" />
              </Link>
              <Link>
                <img src="facebook.svg" />
              </Link>
            </div>
          </div>

          <Postmenuaction />
          <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
      <Comments/>
    </div>
  );
};

export default SinglePostPage;
