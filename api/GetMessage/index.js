module.exports = async function (context, req) {
  const date = "2023-12-01T19:07:12.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

