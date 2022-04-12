module.exports = async function (context, req) {
  const date = "2022-04-12T19:08:48.262Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

