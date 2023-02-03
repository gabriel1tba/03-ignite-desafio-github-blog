import ptBR from 'date-fns/locale/pt-BR';
import { formatDistanceToNowStrict } from 'date-fns';

const formatDate = (date: string): string => {
  return formatDistanceToNowStrict(new Date(date), {
    locale: ptBR,
    addSuffix: true,
  });
};

export default formatDate;
