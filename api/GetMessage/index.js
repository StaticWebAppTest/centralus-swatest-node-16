module.exports = async function (context, req) {
  const date = "2022-06-22T18:14:44.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

