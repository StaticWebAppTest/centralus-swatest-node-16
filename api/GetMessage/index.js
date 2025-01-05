module.exports = async function (context, req) {
  const date = "2025-01-05T18:14:06.680Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

