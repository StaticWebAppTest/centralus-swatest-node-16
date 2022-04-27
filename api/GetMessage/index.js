module.exports = async function (context, req) {
  const date = "2022-04-27T22:11:04.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

