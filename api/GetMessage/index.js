module.exports = async function (context, req) {
  const date = "2022-04-19T21:09:55.464Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

