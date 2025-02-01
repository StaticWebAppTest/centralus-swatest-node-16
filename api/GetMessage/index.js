module.exports = async function (context, req) {
  const date = "2025-02-01T17:09:29.860Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

