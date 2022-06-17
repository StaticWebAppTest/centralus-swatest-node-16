module.exports = async function (context, req) {
  const date = "2022-06-17T19:08:48.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

