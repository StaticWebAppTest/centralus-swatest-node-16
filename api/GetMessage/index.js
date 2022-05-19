module.exports = async function (context, req) {
  const date = "2022-05-19T10:13:12.305Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

