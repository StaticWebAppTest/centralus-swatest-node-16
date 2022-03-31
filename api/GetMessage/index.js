module.exports = async function (context, req) {
  const date = "2022-03-31T03:23:29.508Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

