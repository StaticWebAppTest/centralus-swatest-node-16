module.exports = async function (context, req) {
  const date = "2025-01-16T20:12:25.957Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

