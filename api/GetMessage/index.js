module.exports = async function (context, req) {
  const date = "2023-01-04T05:08:55.422Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

