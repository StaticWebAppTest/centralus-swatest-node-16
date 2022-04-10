module.exports = async function (context, req) {
  const date = "2022-04-10T20:10:30.909Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

