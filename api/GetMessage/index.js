module.exports = async function (context, req) {
  const date = "2025-02-10T18:16:14.500Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

