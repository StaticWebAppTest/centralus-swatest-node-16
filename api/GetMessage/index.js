module.exports = async function (context, req) {
  const date = "2022-12-09T22:09:14.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

