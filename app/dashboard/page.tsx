import { createClient } from "@/lib/supabase";
// import { updateProfile } from "./action";

export default async function Profile() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: announcement } = await supabase
    .from("announcement")
    .select("*")
    .order("created_at", { ascending: false });

    console.log(announcement);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Profile</h1>
          <form action="/signout" method="post">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">
              Sign Out
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="nama" className="block text-sm font-medium mb-2">
              Email
            </label>
            <p className="">{user!.email}</p>
          </div>
        </div>

        <br />
        <div>
          <h2 className="text-xl font-semibold mb-4">Announcements</h2>
          {announcement && announcement.length > 0 ? (
            <ul className="space-y-2">
              {announcement.map((item) => (
                <li key={item.id} className="border-b pb-2">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.content}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p>No announcements available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
