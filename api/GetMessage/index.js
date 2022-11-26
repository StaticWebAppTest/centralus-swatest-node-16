module.exports = async function (context, req) {
  const date = "2022-11-26T22:09:04.211Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

