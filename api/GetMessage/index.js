module.exports = async function (context, req) {
  const date = "2022-07-06T10:13:01.617Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

