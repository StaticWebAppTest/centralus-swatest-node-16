module.exports = async function (context, req) {
  const date = "2023-05-05T03:09:32.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

