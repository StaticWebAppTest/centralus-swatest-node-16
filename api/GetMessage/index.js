module.exports = async function (context, req) {
  const date = "2022-03-16T11:08:29.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

