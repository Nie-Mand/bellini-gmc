import { useState, useEffect } from "react"
import toast, { Toaster } from "react-hot-toast"
import { launchReservation, getTables } from "../data"

const useBooking = () => {
  const [bg, setBg] = useState()
  const [_space, setSpace] = useState("lounge")
  const [tables, setTables] = useState([])
  const [date, setDate] = useState(null)

  useEffect(() => {
    setSpace("cafe")
    setBg("url('/img/cafe.png')")
  }, [])

  const toLounge = () => {
    setSpace("lounge")
    setBg("url('/img/beach.png')")
  }

  const addRange = (x, y) => {
    if (tables.find((table) => table.x === x && table.y === y)) {
      setTables(tables.filter((table) => !(table.x === x && table.y === y)))
    } else {
      setTables([
        ...tables,
        {
          x,
          y,
        },
      ])
    }
  }

  const include = (x, y) => {
    return tables.find((table) => table.x === x && table.y === y)
  }

  const toRooftop = () => {
    setSpace("rooftop")
    setBg("url('/img/roof.png')")
  }

  const toCafe = () => {
    setSpace("cafe")
    setBg("url('/img/cafe.png')")
  }

  const space = () => {
    let data
    if (_space === "lounge") data = lounge
    if (_space === "rooftop") data = rooftop
    if (_space === "cafe") data = cafe

    return {
      n: data.n,
      m: data.m,

      tables: new Array(data.n).fill(0).map((_, i) => {
        return new Array(data.m).fill(0).map((_, j) => {
          if (!data.tables.find((table) => table.x === i && table.y === j)) {
            return null
          } else {
            const field = data.tables.find(
              (table) => table.x === i && table.y === j
            )
            return { isVIP: field.isVIP }
          }
        })
      }),
    }
  }

  return {
    _space,
    space,
    toLounge,
    toRooftop,
    toCafe,
    addRange,
    tables,
    include,
    setTables,
    backgroundImage: bg,
    date,
    setDate,
  }
}

const Booking = () => {
  const {
    _space,
    space,
    toLounge,
    toRooftop,
    toCafe,
    addRange,
    tables,
    include,
    backgroundImage,
    date,
    setDate,
    setTables,
  } = useBooking()
  const [fullname, setFullname] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  const handleReservation = async () => {
    if (space === "lounge") data.space = "6211ab161f34413287faf584"

    if (space === "cafe") data.space = "6211acaf1f34413287faf587"

    if (fullname.length < 3) {
      toast.error("Veuillez entrer un nom valide")
      return
    }

    console.log(phone)

    if (phone.length !== 8) {
      toast.error("Veuillez entrer un numéro de téléphone valide")
      return
    }

    if (!date) {
      toast.error("Veuillez entrer une date valide")
      return
    }

    if (tables.length !== 1) {
      toast.error("Veuillez choisir une table")
      return
    }

    const { x, y } = tables[0]

    const _date = new Date(date)
    _date.setMinutes(0, 0, 0)
    const data = {
      full_name: fullname,
      email,
      phone,
      tables,
      date: _date,
      space,
      x,
      y,
    }

    await launchReservation(data)

    toast.success("Votre réservation a bien été prise en compte")

    setTables(
      tables.filter((table) => {
        console.log(
          x,
          y,
          table,
          table.x === x,
          table.y === y,
          !(table.x === x && table.y === y)
        )
        return !(table.x === x && table.y === y)
      })
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-[200vh] md:h-screen">
      <Toaster />
      <div className="relative">
        <div
          className="bg-cover bg-center bg-no-repeat h-screen md:h-full duration-200"
          style={{ backgroundImage }}
        ></div>

        <div className="absolute top-0 bg-black/80 h-full w-full backdrop-blur-sm">
          <div className="flex justify-center gap-x-10 md:gap-x-20 gelasio text-white py-10">
            <button onClick={toCafe}>Café</button>
            <button onClick={toLounge}>Lounge</button>
            <button onClick={toRooftop}>Rooftop</button>
          </div>

          <div className="grid place-content-center mt-32">
            <div className="flex flex-col gap-4">
              {!date ? (
                <div className="text-white font-bold">Choose Date</div>
              ) : (
                space().tables.map((row, x) => (
                  <div key={x} className="flex items-center gap-4">
                    {row.map((cell, y) =>
                      cell ? (
                        <button
                          onClick={() => addRange(x, y)}
                          key={y}
                          className={`border-2 font-bold duration-200 rounded-2xl w-14 h-14 ${
                            cell.isVIP
                              ? "border-yellow-400 text-yellow-400"
                              : "border-[bg-[rgba(126, 123, 123, 0.2)]]"
                          }  ${
                            include(x, y)
                              ? cell.isVIP
                                ? "bg-yellow-400 text-black"
                                : "bg-gray-200"
                              : ""
                          }`}
                        >
                          {cell.isVIP ? "VIP" : ""}
                        </button>
                      ) : (
                        <button
                          onClick={() => addRange(x, y)}
                          key={y}
                          className={`w-14 h-14 `}
                        ></button>
                      )
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-full p-10 mt-16">
            <div className="w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Full Name{" "}
              </label>
              <div>
                <input
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  type="string"
                  className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>

            <div className="mt-6 ">
              <label
                id="email"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Phone{" "}
              </label>
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                ariaLabelledby="phone"
                type="tel"
                className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
            </div>

            <div className="mt-6 w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Email{" "}
              </label>
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>

            <div className="mt-6 w-full">
              <label
                htmlFor="pass"
                className="text-sm font-medium leading-none text-gray-800"
              >
                {" "}
                Reservation Date{" "}
              </label>
              <div>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="datetime-local"
                  className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                onClick={handleReservation}
                role="button"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 text-sm font-semibold leading-none text-white focus:outline-none duration-200 bg-[#20201E] border rounded-full  py-4 w-full"
              >
                Reserver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const lounge = {
  name: "Lounge",
  n: 4,
  m: 5,
  tables: [
    { x: 0, y: 0, isVIP: false },
    { x: 0, y: 2, isVIP: false },
    { x: 0, y: 4, isVIP: false },

    { x: 1, y: 1, isVIP: true },
    { x: 1, y: 3, isVIP: false },

    { x: 2, y: 1, isVIP: false },
    { x: 2, y: 3, isVIP: false },

    { x: 3, y: 0, isVIP: true },
    { x: 3, y: 2, isVIP: false },
    { x: 3, y: 4, isVIP: false },
  ],
}

const cafe = {
  name: "Cafe",
  n: 4,
  m: 5,
  tables: [
    { x: 0, y: 0, isVIP: false },
    { x: 0, y: 4, isVIP: false },

    { x: 1, y: 3, isVIP: false },

    { x: 2, y: 1, isVIP: false },
    { x: 2, y: 3, isVIP: false },

    { x: 3, y: 0, isVIP: true },
    { x: 3, y: 2, isVIP: false },
    { x: 3, y: 4, isVIP: false },
  ],
}

const rooftop = {
  name: "Rooftop",
  n: 4,
  m: 5,
  tables: [
    { x: 0, y: 0, isVIP: false },
    { x: 0, y: 2, isVIP: false },
    { x: 0, y: 4, isVIP: false },

    { x: 1, y: 1, isVIP: true },
    { x: 1, y: 3, isVIP: false },

    { x: 2, y: 1, isVIP: false },
    { x: 2, y: 3, isVIP: false },

    { x: 3, y: 0, isVIP: true },
    { x: 3, y: 2, isVIP: false },
    { x: 3, y: 4, isVIP: false },
  ],
}

export default Booking
