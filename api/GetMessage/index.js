module.exports = async function (context, req) {
  const date = "2022-03-17T19:09:16.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

