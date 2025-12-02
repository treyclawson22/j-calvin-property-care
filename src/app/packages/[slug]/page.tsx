import PackagePageClient from './PackagePageClient';

// Required for static export
export function generateStaticParams() {
  return [
    { slug: 'essentials' },
    { slug: 'signature' },
    { slug: 'concierge' },
    { slug: 'estate' },
  ];
}

interface PackagePageProps {
  params: { slug: string };
}

export default function PackagePage({ params }: PackagePageProps) {
  return <PackagePageClient slug={params.slug} />;
}
