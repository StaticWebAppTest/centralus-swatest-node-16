module.exports = async function (context, req) {
  const date = "2023-08-09T21:07:54.420Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

