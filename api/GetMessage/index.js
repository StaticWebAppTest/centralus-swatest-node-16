module.exports = async function (context, req) {
  const date = "2024-01-14T05:08:41.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

