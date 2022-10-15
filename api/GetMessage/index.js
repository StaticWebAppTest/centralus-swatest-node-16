module.exports = async function (context, req) {
  const date = "2022-10-15T09:15:48.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

