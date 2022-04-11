module.exports = async function (context, req) {
  const date = "2022-04-11T03:37:54.591Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

