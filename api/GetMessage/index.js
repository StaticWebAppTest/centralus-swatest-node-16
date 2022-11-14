module.exports = async function (context, req) {
  const date = "2022-11-14T16:15:54.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

