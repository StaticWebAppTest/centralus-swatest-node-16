module.exports = async function (context, req) {
  const date = "2022-08-06T08:13:14.749Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

