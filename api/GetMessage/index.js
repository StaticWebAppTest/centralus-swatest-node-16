module.exports = async function (context, req) {
  const date = "2023-10-17T00:41:19.424Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

