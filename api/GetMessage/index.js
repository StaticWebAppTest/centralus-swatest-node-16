module.exports = async function (context, req) {
  const date = "2022-11-06T19:08:51.848Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

