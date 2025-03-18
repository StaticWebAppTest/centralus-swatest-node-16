module.exports = async function (context, req) {
  const date = "2025-03-18T20:12:35.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

