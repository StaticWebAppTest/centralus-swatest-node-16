module.exports = async function (context, req) {
  const date = "2022-07-26T08:13:51.950Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

