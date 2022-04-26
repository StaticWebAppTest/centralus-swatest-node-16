module.exports = async function (context, req) {
  const date = "2022-04-26T22:10:30.607Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

