
import { Header } from "@/components/Header";
import { FrontendForm } from "@/components/FrontendForm";
import { Container } from "@/components/ui/container";
import { Palmtree, Waves, Database } from "lucide-react";

const Submit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 pt-24 pb-16 wave-bg">
        <Container className="text-center mb-12 animate-slide-down">
          <div className="relative inline-flex items-center justify-center mb-6">
            <div className="absolute -top-1 -left-1">
              <Palmtree className="h-6 w-6 text-hawaii-green animate-wave" />
            </div>
            <div className="absolute -bottom-1 -right-1">
              <Waves className="h-6 w-6 text-hawaii-teal animate-wave" />
            </div>
            <span className="text-xs font-semibold tracking-wider uppercase bg-hawaii-blue/10 text-hawaii-blue px-4 py-1.5 rounded-full mb-3 inline-block border border-hawaii-blue/20 backdrop-blur-sm">
              Submit New Entry
            </span>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 gradient-text inline-block">
            Add a Decentralized Frontend
          </h1>
          
          <p className="max-w-2xl mx-auto text-muted-foreground backdrop-blur-sm bg-white/30 p-4 rounded-xl border border-white/20">
            Submit a new frontend to the registry. Your submission will be stored on IPFS and added to the blockchain registry. 
            A deposit of <span className="font-medium text-hawaii-blue">0.435 ETH</span> is required for submission.
          </p>
        </Container>
        
        <FrontendForm />
      </main>
      
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
        <div className="absolute bottom-0 left-0 w-full h-[40vh] bg-gradient-to-t from-hawaii-teal/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default Submit;
