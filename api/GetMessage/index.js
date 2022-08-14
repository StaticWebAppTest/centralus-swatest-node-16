module.exports = async function (context, req) {
  const date = "2022-08-14T10:10:58.797Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

