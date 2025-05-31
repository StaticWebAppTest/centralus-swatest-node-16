module.exports = async function (context, req) {
  const date = "2025-05-31T09:12:58.201Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

