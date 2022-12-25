module.exports = async function (context, req) {
  const date = "2022-12-25T21:07:43.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

