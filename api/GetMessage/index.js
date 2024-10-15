module.exports = async function (context, req) {
  const date = "2024-10-15T12:22:58.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

