module.exports = async function (context, req) {
  const date = "2023-10-01T19:06:32.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

