module.exports = async function (context, req) {
  const date = "2023-11-21T12:17:47.963Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

