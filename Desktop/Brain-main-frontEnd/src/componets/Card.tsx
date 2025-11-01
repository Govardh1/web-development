import React from 'react'
import { ShareIcon } from '../icons/ShareIcon';

interface CardProp {
  type: "youtube" | "twitter";
  title: string;
  link: string;
}

function Card(props: CardProp) {
  return (
    <div className='p-6 bg-white rounded-md border-grey-200 max-w-72 border'>
      <div className='flex justify-between mb-4'>
        <div className='flex items-center font-md'>
          <div className='text-grey-500 pr-4'>
            <ShareIcon />
          </div>
          {props.title}
        </div>
        <div className='flex text-grey-500 items-center'>
          <div className='pr-2'>
            <a href={props.link} target='_blank'>
              <ShareIcon />
            </a>
          </div>
          <div className='text-grey-500'>
            <ShareIcon />
          </div>
        </div>
      </div>

      {/* changed 'flex' -> 'flex flex-col' so content stacks vertically */}
      <div>
        {props.type === "youtube" && (
          <iframe
            className='w-full aspect-video rounded-md'
            src={props.link.replace('watch?v=', 'embed/')}
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            referrerPolicy='strict-origin-when-cross-origin'
            allowFullScreen
          ></iframe>
        )}

        {props.type === "twitter" && (
          /* added mt-2 to match iframe spacing */
          <blockquote className="twitter-tweet w-full mt-2">
            <a href={props.link.replace("x.com", "twitter.com")}></a>
          </blockquote>
        )}
      </div>
    </div>
  )
}

export default Card
