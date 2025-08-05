module.exports = async function (context, req) {
  const date = "2025-08-05T17:14:00.120Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

