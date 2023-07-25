module.exports = async function (context, req) {
  const date = "2023-07-25T02:16:51.224Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

