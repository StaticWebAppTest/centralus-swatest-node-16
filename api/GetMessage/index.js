module.exports = async function (context, req) {
  const date = "2023-08-07T12:16:36.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

