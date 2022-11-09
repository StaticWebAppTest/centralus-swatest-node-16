module.exports = async function (context, req) {
  const date = "2022-11-09T23:11:55.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

