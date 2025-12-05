module.exports = async function (context, req) {
  const date = "2025-12-05T20:15:44.682Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

