module.exports = async function (context, req) {
  const date = "2025-02-16T20:12:12.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

