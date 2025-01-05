module.exports = async function (context, req) {
  const date = "2025-01-05T23:10:48.387Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

