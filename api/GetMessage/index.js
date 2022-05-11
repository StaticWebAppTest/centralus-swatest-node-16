module.exports = async function (context, req) {
  const date = "2022-05-11T13:34:24.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

