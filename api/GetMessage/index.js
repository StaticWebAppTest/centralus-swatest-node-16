module.exports = async function (context, req) {
  const date = "2024-08-05T00:52:00.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

