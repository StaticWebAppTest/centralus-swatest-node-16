module.exports = async function (context, req) {
  const date = "2022-04-22T19:09:01.819Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

