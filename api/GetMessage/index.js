module.exports = async function (context, req) {
  const date = "2025-11-30T10:13:19.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

