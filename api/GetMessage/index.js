module.exports = async function (context, req) {
  const date = "2022-03-31T22:10:11.907Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

