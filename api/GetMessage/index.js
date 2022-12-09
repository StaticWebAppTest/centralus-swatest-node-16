module.exports = async function (context, req) {
  const date = "2022-12-09T11:08:03.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

