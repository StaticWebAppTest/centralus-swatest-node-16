module.exports = async function (context, req) {
  const date = "2022-10-05T03:28:45.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

