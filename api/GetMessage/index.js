module.exports = async function (context, req) {
  const date = "2023-09-21T19:06:48.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

