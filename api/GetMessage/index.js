module.exports = async function (context, req) {
  const date = "2024-01-28T20:08:32.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

