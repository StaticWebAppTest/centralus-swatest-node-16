module.exports = async function (context, req) {
  const date = "2022-07-31T13:21:54.317Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

