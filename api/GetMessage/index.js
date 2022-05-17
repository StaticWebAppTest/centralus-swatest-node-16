module.exports = async function (context, req) {
  const date = "2022-05-17T08:14:43.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

