module.exports = async function (context, req) {
  const date = "2023-05-21T19:06:35.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

