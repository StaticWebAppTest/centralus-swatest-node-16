module.exports = async function (context, req) {
  const date = "2025-03-15T22:11:32.499Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

