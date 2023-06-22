module.exports = async function (context, req) {
  const date = "2023-06-22T14:08:03.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

