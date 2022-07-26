module.exports = async function (context, req) {
  const date = "2022-07-26T23:10:25.881Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

