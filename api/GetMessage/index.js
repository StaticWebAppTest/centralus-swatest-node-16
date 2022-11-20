module.exports = async function (context, req) {
  const date = "2022-11-20T13:21:05.893Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

