module.exports = async function (context, req) {
  const date = "2025-05-20T16:16:55.687Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

