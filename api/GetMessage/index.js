module.exports = async function (context, req) {
  const date = "2025-01-07T07:11:34.477Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

