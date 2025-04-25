module.exports = async function (context, req) {
  const date = "2025-04-25T07:12:58.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

