module.exports = async function (context, req) {
  const date = "2023-05-25T20:09:05.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

