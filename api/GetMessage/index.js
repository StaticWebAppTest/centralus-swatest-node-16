module.exports = async function (context, req) {
  const date = "2025-03-24T10:14:11.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

