module.exports = async function (context, req) {
  const date = "2022-08-20T19:08:42.538Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

