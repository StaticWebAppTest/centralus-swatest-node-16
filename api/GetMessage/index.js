module.exports = async function (context, req) {
  const date = "2024-08-04T22:10:20.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

