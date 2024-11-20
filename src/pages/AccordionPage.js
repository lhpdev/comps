import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: '311231',
      label: 'Can I use React on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: 'vvxcvc',
      label: 'Can I use Javascript on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    },
    {
      id: 'pokpo',
      label: 'Can I use CSS on a project?',
      content: 'You can use React on any project you want. You can use React on any project you want. You can use React on any project you want.'
    }
  ]
  return <Accordion items={items} />;
}

export default AccordionPage;