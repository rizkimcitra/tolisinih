import { createActivity } from '@/libs/createActivity'
import { doGet, doPost } from '@/libs/doFetch'
import { setActivity } from '@/redux/actions/activityAction'

import ActivityCard from './ActivityCard'

import { Suspense, lazy, memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Figures = lazy(() => import('@/components/Figures'))

const ActivityList = () => {
  const activity = useSelector((state) => state.activity.activity)
  const dispatch = useDispatch()

  const syncActivity = async () => {
    const response = await doGet('/activity-groups?email=rizki.maulana@skyshi.com')
    dispatch(setActivity(response.data))
  }

  const addNewActivity = async () => {
    const activity = createActivity()
    await doPost('/activity-groups', activity)
    await syncActivity()
  }

  if (activity.length > 0) {
    return (
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 flex-[1_1_auto]'>
        {activity.map((item) => (
          <ActivityCard {...item} key={item.id} />
        ))}
      </div>
    )
  }

  return (
    <Suspense fallback={null}>
      <Figures
        dataCy='activity-empty-state'
        onClick={addNewActivity}
        src='https://ik.imagekit.io/mlnzyx/devcode-todo/new-activity_wJFQLMWOpxN.svg?updatedAt=1635360519343'
      />
    </Suspense>
  )
}

export default memo(ActivityList)
