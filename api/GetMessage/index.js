module.exports = async function (context, req) {
  const date = "2025-02-25T12:23:35.721Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

