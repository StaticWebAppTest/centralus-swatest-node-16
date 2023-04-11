module.exports = async function (context, req) {
  const date = "2023-04-11T07:08:51.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

