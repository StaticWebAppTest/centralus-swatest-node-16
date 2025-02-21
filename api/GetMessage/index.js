module.exports = async function (context, req) {
  const date = "2025-02-21T07:11:47.176Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

