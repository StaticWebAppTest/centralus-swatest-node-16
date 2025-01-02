module.exports = async function (context, req) {
  const date = "2025-01-02T03:15:30.013Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

