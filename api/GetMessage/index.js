module.exports = async function (context, req) {
  const date = "2023-10-20T10:09:29.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

