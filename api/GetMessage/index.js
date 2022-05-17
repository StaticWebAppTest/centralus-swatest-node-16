module.exports = async function (context, req) {
  const date = "2022-05-17T04:26:20.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

