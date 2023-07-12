module.exports = async function (context, req) {
  const date = "2023-07-12T17:08:43.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

