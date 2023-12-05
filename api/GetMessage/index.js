module.exports = async function (context, req) {
  const date = "2023-12-05T11:07:52.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

