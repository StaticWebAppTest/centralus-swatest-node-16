module.exports = async function (context, req) {
  const date = "2025-01-15T20:12:18.547Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

