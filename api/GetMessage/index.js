module.exports = async function (context, req) {
  const date = "2023-07-14T20:10:19.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

