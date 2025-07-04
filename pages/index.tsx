'use client';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-bold mb-6">ALX Listing App</h1>
      
      <div className="mb-8">
        <Button variant="primary" onClick={() => console.log('Clicked!')}>
          Explore Listings
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Modern Apartment"
          description="Beautiful apartment in the city center"
          imageUrl="/assets/images/placeholder1.png"
          price={120}
        />
        <Card
          title="Cozy Cottage"
          description="Charming cottage with mountain views"
          imageUrl="/assets/images/placeholder2.png"
          price={95}
        />
      </div>
    </>
  );
}