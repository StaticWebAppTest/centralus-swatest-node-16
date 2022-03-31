module.exports = async function (context, req) {
  const date = "2022-03-31T12:18:59.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

