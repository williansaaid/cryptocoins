"use client"
import Card from "@/components/Card";
import useGetCoins from "@/services/useGetCoins";

export default function Home() {

  const { data: coins, isLoading } = useGetCoins();

  return (
    <>
      <main
        className="flex flex-col min-h-screen w-full bg-fourth items-center"
      >
        <div
          className="w-full h-full flex flex-wrap justify-center items-center gap-12 py-8 md:py-16 xl:py-20"
        >
          { coins !== undefined ?
            coins.map((coin: any) =>
              <Card
                key={coin?.id}
                name={coin?.name}
                price={coin?.current_price}
                image={coin?.image}
                symbol={coin?.symbol}
                lastUpdated={coin?.last_updated}
                market_cap={coin?.market_cap}
              />
            ) : null
          }
        </div>
      </main>
    </>
  )
};