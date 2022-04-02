module.exports = async function (context, req) {
  const date = "2022-04-02T14:09:33.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

