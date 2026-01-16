'use client'

const Qualifications = () => {
  return (
    <div>
      <h4 className='text-primary pb-3'>Qualifications</h4>
      <ul className='border-primary/40 bg-primary/20 flex flex-col rounded-md border'>
        <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
          <span>
            <strong>Shoden</strong> (Reiki First Degree)
          </span>
          <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
            June 2018
          </span>
        </li>
        <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
          <span>
            <strong>Okuden</strong> (Reiki Second Degree)
          </span>
          <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
            October 2018
          </span>
        </li>
        <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
          <span>
            <strong>Shinpiden</strong> (Reiki Master Practitioner)
          </span>
          <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
            June 2019
          </span>
        </li>
        <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
          <span>
            <strong>Animal Reiki Practitioner</strong>
          </span>
          <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
            September 2019
          </span>
        </li>
        <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
          <span>
            <strong>Energy Healing Certification</strong> - Northwestern
            Community College
          </span>
          <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
            July 2020
          </span>
        </li>
        <li className='border-primary/40 flex flex-wrap items-center justify-between gap-2 border-b px-4 py-2 md:justify-start'>
          <span>
            <strong>Gokuikaiden</strong> (Shihan, Master Teacher)
          </span>
          <span className='rounded-md bg-white px-2 py-0.5 text-xs font-bold whitespace-nowrap'>
            May 2021
          </span>
        </li>
        <li className='px-4 py-2'>
          <strong>Member of the Reiki Healing Association</strong>
        </li>
      </ul>
    </div>
  )
}

export default Qualifications
