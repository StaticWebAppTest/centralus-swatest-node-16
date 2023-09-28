module.exports = async function (context, req) {
  const date = "2023-09-28T23:08:29.861Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

