module.exports = async function (context, req) {
  const date = "2025-03-28T18:17:42.934Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

