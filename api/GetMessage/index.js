module.exports = async function (context, req) {
  const date = "2022-08-22T18:13:00.308Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

