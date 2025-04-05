module.exports = async function (context, req) {
  const date = "2025-04-05T11:09:47.730Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

