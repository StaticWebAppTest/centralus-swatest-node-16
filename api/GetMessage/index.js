module.exports = async function (context, req) {
  const date = "2024-03-08T16:10:21.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

