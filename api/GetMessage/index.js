module.exports = async function (context, req) {
  const date = "2023-09-14T12:16:38.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

