module.exports = async function (context, req) {
  const date = "2022-07-10T16:13:58.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

