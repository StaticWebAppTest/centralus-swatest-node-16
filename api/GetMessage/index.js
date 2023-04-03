module.exports = async function (context, req) {
  const date = "2023-04-03T23:08:29.494Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

