import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { useContactSubmission } from '../hooks/useContactSubmission';
import { toast } from 'sonner';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>();
  const { mutate: submitContact, isPending } = useContactSubmission();
  const [projectType, setProjectType] = useState('');

  const onSubmit = (data: ContactFormData) => {
    submitContact(data, {
      onSuccess: () => {
        toast.success('Thank you for reaching out!', {
          description: 'We\'ll get back to you within 24 hours.',
        });
        reset();
        setProjectType('');
      },
      onError: (error) => {
        toast.error('Something went wrong', {
          description: 'Please try again or contact us directly.',
        });
        console.error('Submission error:', error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-card p-8 rounded-lg shadow-elegant border border-border/50">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="name"
          {...register('name', { required: 'Name is required' })}
          placeholder="Your full name"
          className="bg-background"
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          placeholder="your.email@example.com"
          className="bg-background"
        />
        {errors.email && (
          <p className="text-sm text-destructive">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium">
          Phone <span className="text-destructive">*</span>
        </Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone', { required: 'Phone number is required' })}
          placeholder="+1 (555) 123-4567"
          className="bg-background"
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="projectType" className="text-sm font-medium">
          Project Type <span className="text-destructive">*</span>
        </Label>
        <Select
          value={projectType}
          onValueChange={(value) => {
            setProjectType(value);
            setValue('projectType', value);
          }}
        >
          <SelectTrigger className="bg-background">
            <SelectValue placeholder="Select a project type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Residential Design">Residential Design</SelectItem>
            <SelectItem value="Commercial Design">Commercial Design</SelectItem>
            <SelectItem value="Consultation">Consultation</SelectItem>
            <SelectItem value="Full Room Design">Full Room Design</SelectItem>
          </SelectContent>
        </Select>
        <input
          type="hidden"
          {...register('projectType', { required: 'Project type is required' })}
        />
        {errors.projectType && (
          <p className="text-sm text-destructive">{errors.projectType.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium">
          Message <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="message"
          {...register('message', { required: 'Message is required' })}
          placeholder="Tell us about your project and vision..."
          rows={5}
          className="bg-background resize-none"
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-gold hover:bg-gold/90 text-gold-foreground font-medium py-6"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </Button>
    </form>
  );
}
