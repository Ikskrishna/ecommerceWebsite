import React, { Suspense, useRef } from 'react';

const ImageSwiper = React.lazy(() => import('../components/ImageSwiper'));
const PromotionalBanner = React.lazy(() => import('../components/PromotionalBanner'));
const PopularProducts = React.lazy(() => import('../components/PopularProducts'));
const CategoryHome = React.lazy(() => import('../components/CategoryHome'));
const Benifits = React.lazy(() => import('../components/Benifits'));
const Badges = React.lazy(() => import('../components/Badges'));



const Home = () => {
  const scrollRef = useRef(null)

  return (
    <>
    <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
      <div>
        <ImageSwiper />
        <CategoryHome />
        <Badges />
        <PopularProducts />
        <PromotionalBanner />
        <Benifits />
      </div>
    </Suspense>
     
    </>
  )
}

export default Home
