module.exports = async function (context, req) {
  const date = "2022-06-01T03:58:04.062Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

