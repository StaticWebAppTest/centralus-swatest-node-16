module.exports = async function (context, req) {
  const date = "2025-12-25T12:29:10.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

