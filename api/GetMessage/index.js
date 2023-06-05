module.exports = async function (context, req) {
  const date = "2023-06-05T04:10:37.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

