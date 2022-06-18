module.exports = async function (context, req) {
  const date = "2022-06-18T15:09:49.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

