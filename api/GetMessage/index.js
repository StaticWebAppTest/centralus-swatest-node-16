module.exports = async function (context, req) {
  const date = "2022-09-21T13:46:53.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

