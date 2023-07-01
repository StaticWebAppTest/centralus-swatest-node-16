module.exports = async function (context, req) {
  const date = "2023-07-01T21:08:07.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

