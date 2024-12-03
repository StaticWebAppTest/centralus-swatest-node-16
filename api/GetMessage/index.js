module.exports = async function (context, req) {
  const date = "2024-12-03T16:15:23.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

