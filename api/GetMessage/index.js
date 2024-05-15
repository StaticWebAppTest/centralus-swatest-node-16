module.exports = async function (context, req) {
  const date = "2024-05-15T10:10:48.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

