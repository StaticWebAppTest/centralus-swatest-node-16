module.exports = async function (context, req) {
  const date = "2022-07-30T22:09:32.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

