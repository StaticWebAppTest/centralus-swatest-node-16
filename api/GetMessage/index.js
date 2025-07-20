module.exports = async function (context, req) {
  const date = "2025-07-20T14:12:28.625Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

