module.exports = async function (context, req) {
  const date = "2025-02-01T13:12:34.287Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

