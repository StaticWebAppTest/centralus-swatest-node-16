module.exports = async function (context, req) {
  const date = "2023-07-01T03:01:28.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

