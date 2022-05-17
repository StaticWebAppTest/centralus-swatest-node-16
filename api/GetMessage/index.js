module.exports = async function (context, req) {
  const date = "2022-05-17T16:16:52.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

