module.exports = async function (context, req) {
  const date = "2022-10-05T23:14:54.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

