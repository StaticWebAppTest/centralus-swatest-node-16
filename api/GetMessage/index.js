module.exports = async function (context, req) {
  const date = "2025-05-22T10:14:38.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

