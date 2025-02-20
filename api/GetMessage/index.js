module.exports = async function (context, req) {
  const date = "2025-02-20T07:11:41.974Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

