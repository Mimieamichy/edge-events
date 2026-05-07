import { useState } from "react";
import { MagneticButton } from "./MagneticButton";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { toast } from "sonner";

export function ProjectForm({ onSuccess }: { onSuccess?: () => void }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setLoading(false);
    toast.success("Inquiry sent successfully! We'll be in touch soon.");
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 py-4 pb-8">
      <div className="space-y-2">
        <Label htmlFor="name" className="font-sans text-xs uppercase tracking-widest text-bone/60">Full Name</Label>
        <Input 
          id="name" 
          placeholder="Jane Doe" 
          required 
          className="border-bone/20 bg-bone/5 text-bone focus-visible:ring-edge"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email" className="font-sans text-xs uppercase tracking-widest text-bone/60">Email Address</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="jane@company.com" 
          required 
          className="border-bone/20 bg-bone/5 text-bone focus-visible:ring-edge"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="event-type" className="font-sans text-xs uppercase tracking-widest text-bone/60">Event Type</Label>
        <Input 
          id="event-type" 
          placeholder="Product Launch, Gala, etc." 
          required 
          className="border-bone/20 bg-bone/5 text-bone focus-visible:ring-edge"
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="font-sans text-xs uppercase tracking-widest text-bone/60">Brief Overview</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your vision..." 
          required 
          className="min-h-[120px] border-bone/20 bg-bone/5 text-bone focus-visible:ring-edge"
        />
      </div>

      <div className="pt-4">
        <MagneticButton 
          type="submit" 
          disabled={loading}
          className="w-full"
        >
          {loading ? "Sending..." : "Submit Inquiry"}
        </MagneticButton>
      </div>
    </form>
  );
}
