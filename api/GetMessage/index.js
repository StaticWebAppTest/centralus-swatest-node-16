module.exports = async function (context, req) {
  const date = "2024-08-18T12:20:07.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

