import {useOptimistic, useState, useTransition} from "react";

export interface PostCardProps{
    id: number;
    title: string;
    body: string;
    userId: number;
}

export default function PostCard(props : PostCardProps){
    const [likes, setLikes] = useState(10);
    const [optimisticLikes, addOptimisticLike] = useOptimistic(
     likes,
     (currentLikes: number, amount: number) => currentLikes + amount
   );    const [isPending, startTransition] = useTransition();
    function handleLike() {
     startTransition(async () => {
         addOptimisticLike(1);

      // Імітація очікування відповіді сервера.
       await new Promise<void>((resolve) => {
         setTimeout(resolve, 1000);
       });

       // Підтвердження зміни в базовому стані.
       setLikes((previousLikes) => previousLikes + 1);
     });
   }
    return (
        <div key={props.id} className="p-3 bg-amber-200  items-center">
            <h2 className="text-green-300">{props.title}</h2>
            <p className="text-amber-50">{props.body}</p>
            <p>UserId: {props.userId}</p>
            <button   disabled={isPending} onClick={() => handleLike()}>Likes: {optimisticLikes}</button>
        </div>
    )
}

