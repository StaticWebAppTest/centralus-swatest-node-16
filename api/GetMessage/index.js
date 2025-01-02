module.exports = async function (context, req) {
  const date = "2025-01-02T20:12:30.946Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

