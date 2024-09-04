module.exports = async function (context, req) {
  const date = "2024-09-04T05:11:55.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

