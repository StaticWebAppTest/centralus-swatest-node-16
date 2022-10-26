module.exports = async function (context, req) {
  const date = "2022-10-26T13:44:11.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

