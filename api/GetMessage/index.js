module.exports = async function (context, req) {
  const date = "2023-05-21T03:09:36.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

