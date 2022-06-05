module.exports = async function (context, req) {
  const date = "2022-06-05T12:17:10.738Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

