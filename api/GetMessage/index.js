module.exports = async function (context, req) {
  const date = "2022-03-22T19:08:20.968Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

