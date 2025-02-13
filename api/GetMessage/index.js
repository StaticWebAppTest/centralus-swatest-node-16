module.exports = async function (context, req) {
  const date = "2025-02-13T10:12:35.621Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

