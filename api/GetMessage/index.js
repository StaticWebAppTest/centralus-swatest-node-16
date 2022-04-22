module.exports = async function (context, req) {
  const date = "2022-04-22T05:30:27.431Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

