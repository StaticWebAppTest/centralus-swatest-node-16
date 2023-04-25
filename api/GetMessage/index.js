module.exports = async function (context, req) {
  const date = "2023-04-25T12:16:55.674Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

