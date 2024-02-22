module.exports = async function (context, req) {
  const date = "2024-02-22T11:07:24.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

