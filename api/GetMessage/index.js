module.exports = async function (context, req) {
  const date = "2024-06-19T03:11:46.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

