module.exports = async function (context, req) {
  const date = "2024-08-25T11:10:02.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

