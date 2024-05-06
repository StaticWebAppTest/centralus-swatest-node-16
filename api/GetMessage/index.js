module.exports = async function (context, req) {
  const date = "2024-05-06T22:09:45.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

