module.exports = async function (context, req) {
  const date = "2022-06-14T03:44:21.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

