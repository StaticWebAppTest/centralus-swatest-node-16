module.exports = async function (context, req) {
  const date = "2025-04-15T20:14:12.405Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

