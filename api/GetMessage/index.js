module.exports = async function (context, req) {
  const date = "2024-12-22T12:20:10.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

