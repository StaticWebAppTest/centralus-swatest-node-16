module.exports = async function (context, req) {
  const date = "2022-06-22T03:26:02.451Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

