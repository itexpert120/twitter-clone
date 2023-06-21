export default function FollowBar() {
  return (
    // Container
    <div className="px-6 py-4 hidden lg:block">
      {/* Background */}
      <div className="bg-neutral-800 rounded-xl p-4">
        {/* Label */}
        <h2 className="text-white text-xl font-semibold">Who to Follow</h2>

        {/* Users List */}
        <div className="flex flex-col gap-6 mt-4">{/* TODO USER LIST */}</div>
      </div>
    </div>
  );
}
