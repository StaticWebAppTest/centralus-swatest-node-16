module.exports = async function (context, req) {
  const date = "2023-05-17T08:11:36.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

