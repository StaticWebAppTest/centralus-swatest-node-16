module.exports = async function (context, req) {
  const date = "2025-02-06T10:12:20.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

