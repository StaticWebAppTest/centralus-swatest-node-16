module.exports = async function (context, req) {
  const date = "2025-01-07T18:16:17.279Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

