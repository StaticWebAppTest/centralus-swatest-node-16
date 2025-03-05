module.exports = async function (context, req) {
  const date = "2025-03-05T07:12:19.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

