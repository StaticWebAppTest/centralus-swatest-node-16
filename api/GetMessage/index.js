module.exports = async function (context, req) {
  const date = "2024-08-26T18:14:25.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

