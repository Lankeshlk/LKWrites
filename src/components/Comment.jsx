const Comment = () => {
  return (
    <div className="p-4 bg-slate-50 rounded-xl mb-8">
      <div className="flex items-center gap-4">
        <img
          src="userImg2.jpg"
          className="w-10 h-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">Sathu</span>
        <span className="text-sm text-gray-500"> 2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci sunt
          quo natus dolore eum in quidem blanditiis iste quibusdam labore
          reprehenderit at quae vel, et assumenda, obcaecati sed tempore, hic
          tempora. Magni deleniti, iure officiis facere minima nobis nam optio
          recusandae eaque expedita et iusto ducimus, consequuntur quaerat
          voluptas earum!
        </p>
      </div>
    </div>
  );
};
export default Comment;
