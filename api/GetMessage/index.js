module.exports = async function (context, req) {
  const date = "2022-11-14T08:15:32.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

