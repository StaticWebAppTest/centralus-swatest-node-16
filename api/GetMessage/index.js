module.exports = async function (context, req) {
  const date = "2025-01-27T23:11:05.521Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

