module.exports = async function (context, req) {
  const date = "2024-08-15T12:20:17.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

