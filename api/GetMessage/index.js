module.exports = async function (context, req) {
  const date = "2025-03-03T19:09:44.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

