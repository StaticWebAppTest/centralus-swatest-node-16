module.exports = async function (context, req) {
  const date = "2025-06-27T09:14:41.551Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

