module.exports = async function (context, req) {
  const date = "2025-12-31T18:21:00.077Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

