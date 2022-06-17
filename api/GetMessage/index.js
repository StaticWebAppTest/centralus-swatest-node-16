module.exports = async function (context, req) {
  const date = "2022-06-17T06:13:49.991Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

