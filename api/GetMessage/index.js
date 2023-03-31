module.exports = async function (context, req) {
  const date = "2023-03-31T12:17:13.959Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

