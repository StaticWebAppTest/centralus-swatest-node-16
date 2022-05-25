module.exports = async function (context, req) {
  const date = "2022-05-25T13:34:14.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

