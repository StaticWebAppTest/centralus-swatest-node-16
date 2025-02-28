module.exports = async function (context, req) {
  const date = "2025-02-28T05:12:41.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

