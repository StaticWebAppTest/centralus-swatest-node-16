module.exports = async function (context, req) {
  const date = "2025-01-26T05:11:31.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

