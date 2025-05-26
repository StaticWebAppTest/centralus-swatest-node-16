module.exports = async function (context, req) {
  const date = "2025-05-26T05:14:24.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

