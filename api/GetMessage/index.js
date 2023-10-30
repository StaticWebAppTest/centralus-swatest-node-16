module.exports = async function (context, req) {
  const date = "2023-10-30T22:08:10.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

