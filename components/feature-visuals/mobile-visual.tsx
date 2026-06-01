import { MapPin, Camera, Phone, Calendar } from "lucide-react";

export function MobileVisual() {
  return (
    <div className="relative flex items-center justify-center py-6">
      <div className="absolute -inset-x-4 -inset-y-2 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-blue-500/5 blur-2xl" />

      <div className="relative h-[480px] w-[230px] rounded-[2.5rem] border-[10px] border-zinc-800 bg-black shadow-2xl shadow-black/50">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />

        <div className="h-full w-full overflow-hidden rounded-[2rem] bg-card">
          <div className="flex items-center justify-between px-5 pt-3 text-[9px]">
            <span>9:41</span>
            <div className="flex items-center gap-0.5">
              <span>●●●●</span>
            </div>
          </div>

          <div className="px-4 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[10px] text-muted-foreground">Good morning</div>
                <div className="text-sm font-semibold">Sarah 👋</div>
              </div>
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-brand-400 to-fuchsia-500 text-[9px] font-semibold text-white">
                SM
              </div>
            </div>
          </div>

          <div className="mx-4 mt-4 rounded-xl bg-gradient-to-br from-brand-500/30 to-fuchsia-500/20 p-3">
            <div className="text-[9px] text-foreground/70">Today&rsquo;s revenue</div>
            <div className="mt-0.5 text-xl font-semibold">$28,500</div>
            <div className="mt-1 flex items-center justify-between">
              <div className="text-[9px] text-foreground/60">
                3 closed · 8 meetings
              </div>
              <div className="text-[9px] font-medium text-lime-400">+18%</div>
            </div>
          </div>

          <div className="mx-4 mt-3">
            <div className="mb-2 flex items-center justify-between">
              <div className="text-[10px] font-semibold">Today&rsquo;s schedule</div>
              <div className="text-[9px] text-brand-300">View all</div>
            </div>
            <div className="space-y-1.5">
              {[
                {
                  time: "10:30",
                  name: "Meeting · Acme Corp",
                  loc: "SoMa, San Francisco",
                  color: "bg-brand-500",
                },
                {
                  time: "13:00",
                  name: "Demo · Hooli Inc.",
                  loc: "Online · Zoom",
                  color: "bg-fuchsia-500",
                },
                {
                  time: "15:30",
                  name: "Contract sign · Wayne Tech",
                  loc: "Downtown, NYC",
                  color: "bg-lime-500",
                },
              ].map((task, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-white/5 bg-background/40 p-2"
                >
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${task.color}/20`}
                  >
                    <span className={`text-[8px] font-semibold text-white`}>
                      {task.time}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-[9px] font-medium">
                      {task.name}
                    </div>
                    <div className="mt-0.5 flex items-center gap-0.5 text-[8px] text-muted-foreground">
                      <MapPin className="h-2 w-2" />
                      {task.loc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-4 mt-3 grid grid-cols-4 gap-2">
            {[
              { icon: <MapPin className="h-3 w-3" />, label: "Check-in" },
              { icon: <Camera className="h-3 w-3" />, label: "Capture" },
              { icon: <Phone className="h-3 w-3" />, label: "Call" },
              { icon: <Calendar className="h-3 w-3" />, label: "Book" },
            ].map((a) => (
              <div
                key={a.label}
                className="flex flex-col items-center gap-1 rounded-lg border border-white/5 bg-background/40 p-2"
              >
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/10 text-foreground">
                  {a.icon}
                </div>
                <div className="text-[8px] text-muted-foreground">
                  {a.label}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 border-t border-white/5 bg-card/80 px-4 py-2 backdrop-blur">
            <div className="flex justify-around">
              {["Home", "Deals", "Contacts", "You"].map((nav, i) => (
                <div
                  key={nav}
                  className={`flex flex-col items-center gap-0.5 ${i === 0 ? "text-brand-300" : "text-muted-foreground"}`}
                >
                  <div className="h-3 w-3 rounded-sm bg-current opacity-60" />
                  <span className="text-[8px]">{nav}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-4 top-12 hidden w-44 rounded-xl border border-white/10 bg-card/95 p-3 shadow-2xl shadow-black/50 backdrop-blur md:block">
        <div className="flex items-start gap-2">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-500/20 text-lime-400">
            <MapPin className="h-3 w-3" />
          </div>
          <div className="min-w-0">
            <div className="text-[10px] font-medium">Check-in successful</div>
            <div className="mt-0.5 text-[9px] text-muted-foreground">
              Acme Corp, SoMa
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
