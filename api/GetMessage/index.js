module.exports = async function (context, req) {
  const date = "2022-07-22T01:04:43.225Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

