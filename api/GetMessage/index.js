module.exports = async function (context, req) {
  const date = "2023-07-13T07:09:17.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

