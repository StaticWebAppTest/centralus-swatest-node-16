module.exports = async function (context, req) {
  const date = "2022-04-22T13:30:09.269Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

