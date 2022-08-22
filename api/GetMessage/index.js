module.exports = async function (context, req) {
  const date = "2022-08-22T19:08:58.987Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

