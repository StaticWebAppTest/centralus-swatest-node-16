module.exports = async function (context, req) {
  const date = "2023-04-26T06:12:01.717Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

