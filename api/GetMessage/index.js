module.exports = async function (context, req) {
  const date = "2025-01-05T22:10:18.067Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

