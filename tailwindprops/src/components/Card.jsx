// import React from 'react'

function Card({userName="MN",postName='Not Assigned'}) {
  return (
    <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/18740580/pexels-photo-18740580/free-photo-of-two-women-talking-and-laughing-against-an-orange-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
        <div className="pt-6  space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates inventore hic atque at esse iste quae unde odit reprehenderit recusandae nobis repellat veniam aspernatur enim, placeat reiciendis quidem deleniti laborum.
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {userName}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {postName}
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  )
}

export default Card