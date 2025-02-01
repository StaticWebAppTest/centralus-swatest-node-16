module.exports = async function (context, req) {
  const date = "2025-02-01T10:11:20.610Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

