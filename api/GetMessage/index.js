module.exports = async function (context, req) {
  const date = "2023-03-26T05:08:29.857Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

