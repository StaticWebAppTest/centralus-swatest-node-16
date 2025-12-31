module.exports = async function (context, req) {
  const date = "2025-12-31T12:29:40.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

