module.exports = async function (context, req) {
  const date = "2025-12-29T15:15:49.468Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

