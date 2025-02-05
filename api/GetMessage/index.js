module.exports = async function (context, req) {
  const date = "2025-02-05T08:14:41.824Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

