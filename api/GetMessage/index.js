module.exports = async function (context, req) {
  const date = "2025-12-29T09:23:32.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

