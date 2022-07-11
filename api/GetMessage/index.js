module.exports = async function (context, req) {
  const date = "2022-07-11T16:17:19.025Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

