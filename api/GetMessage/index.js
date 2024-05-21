module.exports = async function (context, req) {
  const date = "2024-05-21T22:09:09.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

