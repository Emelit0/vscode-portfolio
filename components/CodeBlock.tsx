"use client";

import SyntaxHighlighter from "react-syntax-highlighter";
import { ReactElement } from "react";
import { useEffect, useState } from "react";
import atomOneDark from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

const CodeBlock: React.FC = (): ReactElement => {
  const line1 = "  1   import {get, isEmpty, isNil} from 'lodash'";
  const line2 =
    "  2   import {ICount, IQuery } from '../commons/commons.interface'";
  const line3 =
    "  3   import {IPostService, IPostUpdateInput} from './post.interface'";
  const line4 =
    "  4   import {IFindPayload} from '../commons/commons.interface'";
  const line5 = "  5   import {Post} from './post.model'";
  const line6 = "  6   import {PostDto} from './post.dto'";
  const line7 = "  7   const { map } = Agile";
  const line8 = "  8   ";
  const line9 = "  9   @Controller()";
  const line10 = " 10   export calss PostController {";
  const line11 = " 11      constructor(";
  const line12 = " 12       @Inject(PostService)";
  const line13 = " 13       private readonly service: IPostService,";
  const line14 = " 14       private readonly logger: PinoLogger,";
  const line15 = " 15     ) {";
  const line16 = " 16      this.logger.setContext(PostController.name);";
  const line17 = " 17     }";
  const line18 = " 18     ";
  const line19 = " 19     @Get('/posts', 'find')";
  const line20 =
    " 20     async find(@Query() query: IQuery): Promise<IFindPayload<Posts>> {";
  const line21 =
    " 21       this.logger.info('PostController#findAll.call %o', query);";
  const line22 = " 22        ";
  const line23 =
    " 23        cosnt {results, cursor } = await this.service.find({";
  const line24 =
    " 24          attributes: !isEmpty(query.attributes) ? query.attributes : undefined,";
  const line25 =
    " 25          where: !isEmpty(query.where) ? JSON.parse(query.where) : undefined,";
  const line26 =
    " 26          order: !isEmpty(query.order) ? query.orderBy : undefined,";
  const line27 = " 27          limit: !isNil(query.limit) ? query.limit : 25,";
  const line28 =
    " 28          before: !isEmpty(query.before) ? query.before : undefined,";
  const line29 =
    " 29          after: !isEmpty(query.after) ? query.after : undefined,";
  const line30 = " 30       });";
  const line31 = " 31      ";
  const line32 = " 32      const result: IFindPayload<Posts> = {";
  const line33 =
    " 33        results: map(results, (result) => PostDto.from(result)),";
  const line34 = " 34        cursor,";
  const line35 = " 35      };";
  const line36 = " 36      ";
  const line37 =
    " 37      this.logger.info('PostController#findAll.result %o', result);";
  const line38 = " 38      ";
  const line39 = " 39      return result;";
  const line40 = " 40     }";
  const line41 = " 41     ";
  const line42 = " 42     @Get('/posts/:id', 'findOne')";
  const line43 =
    " 43     async findOne(@Param('id') id: string): Promise<PostDto> {";
  const line44 =
    " 44       this.logger.info('PostController#findOne.call %o', id);";
  const line45 = " 45       ";
  const line46 = " 46       const result = await this.service.findOne({";
  const line47 = " 47         where: { id },";

  return (
    <>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line1}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line2}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line3}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line3}
      </SyntaxHighlighter>

      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line4}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line5}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line6}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line7}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line8}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line9}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line10}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line11}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line12}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line13}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line14}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line15}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line16}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line17}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line18}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line19}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line20}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line21}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line22}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line23}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line24}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line25}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line26}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line27}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line28}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line29}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line30}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line31}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line32}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line33}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line34}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line35}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line36}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line37}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line38}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line39}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line40}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line41}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line42}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line43}
      </SyntaxHighlighter>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        customStyle={{ padding: 1, backgroundColor: "transparent" }}
      >
        {line44}
      </SyntaxHighlighter>
    </>
  );
};

export default CodeBlock;
