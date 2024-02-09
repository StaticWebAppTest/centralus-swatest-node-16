module.exports = async function (context, req) {
  const date = "2024-02-09T14:08:04.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

