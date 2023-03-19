module.exports = async function (context, req) {
  const date = "2023-03-19T05:08:42.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

