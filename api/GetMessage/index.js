module.exports = async function (context, req) {
  const date = "2022-05-17T17:18:48.208Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

