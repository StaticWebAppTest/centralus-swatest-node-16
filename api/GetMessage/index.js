module.exports = async function (context, req) {
  const date = "2025-03-24T05:13:00.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

