module.exports = async function (context, req) {
  const date = "2022-07-08T17:21:56.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

