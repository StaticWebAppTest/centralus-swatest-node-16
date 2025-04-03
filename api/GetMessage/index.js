module.exports = async function (context, req) {
  const date = "2025-04-03T02:55:21.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

