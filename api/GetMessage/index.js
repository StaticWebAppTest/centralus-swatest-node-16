module.exports = async function (context, req) {
  const date = "2024-12-16T10:14:17.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

