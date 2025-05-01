module.exports = async function (context, req) {
  const date = "2025-05-01T05:13:41.813Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

