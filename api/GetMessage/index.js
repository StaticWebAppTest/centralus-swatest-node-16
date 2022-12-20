module.exports = async function (context, req) {
  const date = "2022-12-20T08:12:29.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

