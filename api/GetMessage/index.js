module.exports = async function (context, req) {
  const date = "2025-06-27T21:11:50.298Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

