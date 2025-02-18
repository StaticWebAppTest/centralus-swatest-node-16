module.exports = async function (context, req) {
  const date = "2025-02-18T05:13:41.288Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

