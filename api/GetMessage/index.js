module.exports = async function (context, req) {
  const date = "2025-02-22T09:12:06.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

