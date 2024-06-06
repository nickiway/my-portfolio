'use client';

import Button from 'components/shared/Button';
import Hero from 'components/shared/Hero';

// import image from 'assets/images/mainPage/funny-portrait-british-shorthair-cat-isolated-transparent-background-png_1075135-346-removebg-preview.png';

export default function MainPage() {
  return (
    <main>
      <Hero
        className="w-full h-[90vh]"
        popoverOpacity={40}
        backgroundImage={
          'https://moewalls.com/wp-content/uploads/2023/02/lofi-japanese-style-room-day-time-thumb.jpg'
        }
      >
        <section className="h-full flex items-center">
          <Button variant="primary">Hello world</Button>
        </section>
      </Hero>

      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere ipsa
        soluta, fuga reiciendis eius similique earum praesentium necessitatibus
        voluptas distinctio ratione tempora atque cumque quos fugit aspernatur.
        Dolores quaerat, quas a nulla, assumenda possimus quibusdam ut et
        mollitia optio repellendus aspernatur voluptas laudantium. Assumenda
        numquam possimus in ea beatae perspiciatis animi libero totam enim. Ex
        recusandae ratione quidem vitae? Ad culpa architecto voluptas error
        voluptatibus soluta illo laboriosam laudantium sapiente quibusdam eum
        aperiam amet facere aut illum, aspernatur provident enim nihil. Delectus
        quod voluptas veniam necessitatibus amet saepe eaque a ea expedita, modi
        eius nemo reiciendis repellendus maxime dolores mollitia.
      </div>
    </main>
  );
}
