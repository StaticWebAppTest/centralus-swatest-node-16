module.exports = async function (context, req) {
  const date = "2025-04-02T10:13:34.811Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

