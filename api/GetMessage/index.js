module.exports = async function (context, req) {
  const date = "2022-09-22T12:25:33.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

