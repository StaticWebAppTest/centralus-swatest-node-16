module.exports = async function (context, req) {
  const date = "2022-08-14T06:13:42.343Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

