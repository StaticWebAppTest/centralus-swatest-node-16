module.exports = async function (context, req) {
  const date = "2024-11-06T10:12:43.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

