module.exports = async function (context, req) {
  const date = "2022-11-20T14:09:28.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

