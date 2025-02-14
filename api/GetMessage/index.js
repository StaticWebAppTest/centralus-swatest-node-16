module.exports = async function (context, req) {
  const date = "2025-02-14T10:12:18.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

