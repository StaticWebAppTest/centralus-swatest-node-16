module.exports = async function (context, req) {
  const date = "2025-02-19T12:20:58.898Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

