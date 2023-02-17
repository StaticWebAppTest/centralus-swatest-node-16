module.exports = async function (context, req) {
  const date = "2023-02-17T23:09:48.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

