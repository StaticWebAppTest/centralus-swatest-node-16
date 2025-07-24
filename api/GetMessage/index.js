module.exports = async function (context, req) {
  const date = "2025-07-24T05:20:17.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

