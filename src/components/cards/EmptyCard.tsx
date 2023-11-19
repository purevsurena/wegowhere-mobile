import * as React from 'react';
import { WhiteSpace, Click, Flex } from '@/components/layouts';
import Icons from '@/components/common/images/Icons';
import { Heading, Paragraph } from '@/components/common/typography';
import { EmptyCardProps } from '@/types/modules/Card';

const EmptyCard = ({ onPress }: EmptyCardProps) => {
  return (
    <Flex flex={1} jc="center" ai="center">
      <Icons name="visa" width={40} height={40} />
      <WhiteSpace size="17" />

      <Paragraph type="Paragraph1" label="No Cards Found" />
      <WhiteSpace size="14" />

      <Paragraph
        type="Paragraph1"
        label={'We recommend adding a card\n for easy payment'}
        textAlign="center"
      />
      <WhiteSpace size="14" />

      <Click onPress={onPress}>
        <Heading type="Heading2" label="Add New Card" color="primary" />
      </Click>
    </Flex>
  );
};

export default EmptyCard;
