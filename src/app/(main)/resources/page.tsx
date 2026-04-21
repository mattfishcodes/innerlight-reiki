import Image from 'next/image'
import { SquareArrowOutUpRight } from 'lucide-react'

const Resources = () => {
  return (
    <div className='py-3'>
      {/* What Is Reiki */}
      <div className='mb-3 items-stretch gap-3 lg:flex'>
        <div className='lg:order-2'>
          <h3 className='text-primary text-center lg:text-start'>
            What is Reiki? (
            <span lang='ja-jp' className='font-light'>
              レイキ
            </span>
            )
          </h3>
          <p className='m-0'>
            Reiki is a Japanese healing energy technique used for the treatment
            of self and others. It was developed in the early 1900&apos;s by a
            Japanese Buddhist named Mikao Usui. The word Reiki comes from the
            Japanese word &quot;Rei&quot; meaning Universal Life, and
            &quot;Ki&quot; which means energy. Reiki is the energy that flows
            through all living things. When energy is blocked, it can lead to
            emotional, physical and spiritual imbalances.
          </p>
          <hr className='border-primary my-4 rounded-md border' />
          <p className='m-0 text-xl font-light'>
            Reiki is NOT a substitute or replacement for conventional medical
            treatment.
          </p>
          <hr className='border-primary my-4 rounded-md border' />
          <p className='mb-3 lg:m-0'>
            During a Reiki session, energy is shared by a trained practitioner
            through touch and intention to promote the health of the body, mind
            and spirit. Common reactions after a Reiki session include feelings
            of relaxation, a sense of calm, pain relief and a sense of well
            being. People seek out Reiki for a variety of reasons. Some of these
            include pain, anxiety or emotional distress. I have shared Reiki
            with people who are grieving and also with people who have a
            terminal illness and are in the process of dying.
          </p>
        </div>
        <div>
          <Image
            src='pagoda'
            alt=''
            className='rounded-md'
            width={768}
            height={1117}
            sizes='(max-width: 768px) 50vw, 25vw'
          />
        </div>
      </div>

      {/* Reiki Session */}
      <div>
        <h3 className='text-primary text-center lg:text-start'>
          Reiki Session
        </h3>

        <p className='m-0'>
          The energy sharing session takes about 45 minutes. I will spend some
          time before the session to explain what will happen and share some
          common reactions to Reiki. I will also discuss what issues brought you
          in to receive Reiki and answer any questions you may have. Reiki is
          shared in a peaceful, quiet setting. You may lie on a table or sit in
          a chair. You will be fully clothed and a blanket can be used for added
          warmth and comfort. Soft music may be played in the background
          depending on the your preference. I will hover my hands over and/or
          place my hands lightly on specific parts of the body for the sharing
          of energy.
        </p>
        <hr className='border-primary my-4 rounded-md border' />
        <p className='m-0 text-xl font-light'>
          You may feel many different sensations such as warmth, coolness,
          calmness, or relaxation.
        </p>
        <hr className='border-primary my-4 rounded-md border' />
        <p className='m-0'>
          Some people even experience visual phenomena such as seeing colors. It
          is also not uncommon to not feel much of anything at all. These are
          all perfectly normal reactions. After the session, I will spend more
          time talking with you about your experiences. Water is recommended
          after a session to enhance the Reiki.
        </p>
      </div>

      {/* Resource Links */}
      <div className='py-3'>
        <h3 className='text-primary text-center lg:text-start'>Links</h3>
        <ul className='border-primary/40 bg-primary/20 flex flex-col rounded-md border'>
          <a
            href='https://journals.sagepub.com/doi/10.1177/2156587217728644'
            className='border-primary/40 hover:bg-primary-100/20 flex items-center gap-1 border-b px-4 py-2 transition-colors'
          >
            Reiki is Better Than Placebo and Has Broad Potential as a
            Complementary Health Therapy <SquareArrowOutUpRight size={16} />
          </a>
          <a
            href='https://www.liebertpub.com/doi/10.1089/acm.2019.0022'
            className='border-primary/40 hover:bg-primary-100/20 flex items-center gap-1 border-b px-4 py-2 transition-colors'
          >
            A Large Scale Effectiveness Trial of Reiki for Physical and
            Psychological Health <SquareArrowOutUpRight size={16} />
          </a>
          <a
            href='https://centerforreikiresearch.com/'
            className='hover:bg-primary-100/20 flex items-center gap-1 px-4 py-2 transition-colors'
          >
            The Center for Reiki Research <SquareArrowOutUpRight size={16} />
          </a>
        </ul>
      </div>
    </div>
  )
}

export default Resources
