module.exports = async function (context, req) {
  const date = "2025-01-29T15:11:53.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

