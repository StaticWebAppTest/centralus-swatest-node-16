module.exports = async function (context, req) {
  const date = "2025-02-20T10:12:49.949Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

