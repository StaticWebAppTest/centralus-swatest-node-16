module.exports = async function (context, req) {
  const date = "2023-05-04T16:20:59.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

