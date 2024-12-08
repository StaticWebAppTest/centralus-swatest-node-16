module.exports = async function (context, req) {
  const date = "2024-12-08T10:12:03.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

