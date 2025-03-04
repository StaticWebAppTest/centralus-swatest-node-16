module.exports = async function (context, req) {
  const date = "2025-03-04T19:09:41.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

