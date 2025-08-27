module.exports = async function (context, req) {
  const date = "2025-08-27T07:12:54.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

