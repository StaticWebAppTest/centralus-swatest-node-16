module.exports = async function (context, req) {
  const date = "2022-08-01T08:14:56.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

