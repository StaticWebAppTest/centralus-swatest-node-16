module.exports = async function (context, req) {
  const date = "2023-03-21T21:08:28.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

