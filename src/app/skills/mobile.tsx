'use client';

import Navbar from '../../components/navbar/default';

export default function MobileSkills() {
  return (
    <Navbar onModeChange={() => {}}>
      <div className="p-4 text-center text-gray-700">
        This is mobile view. Please implement mobile version here.
      </div>
    </Navbar>
  );
}
