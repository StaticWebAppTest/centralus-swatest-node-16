module.exports = async function (context, req) {
  const date = "2023-01-20T21:08:31.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

