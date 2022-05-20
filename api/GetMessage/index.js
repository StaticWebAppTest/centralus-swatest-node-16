module.exports = async function (context, req) {
  const date = "2022-05-20T10:13:04.323Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

