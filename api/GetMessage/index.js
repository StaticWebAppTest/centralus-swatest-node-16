module.exports = async function (context, req) {
  const date = "2022-10-17T19:26:50.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

