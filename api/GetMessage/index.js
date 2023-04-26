module.exports = async function (context, req) {
  const date = "2023-04-26T20:08:13.634Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

